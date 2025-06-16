/**
 * Performance audit script pro monitoring upgradů artekoucka.cz
 */

interface PerformanceMetrics {
  timestamp: number;
  version: string;
  denoVersion: string;
  buildSize: number;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  buildTime: number;
  bundleAnalysis: {
    jsSize: number;
    cssSize: number;
    imageSize: number;
    totalAssets: number;
  };
}

class PerformanceAuditor {
  private metricsFile = "./performance-metrics.json";
  private serverProcess: Deno.ChildProcess | null = null;

  async runAudit(): Promise<PerformanceMetrics> {
    console.log("🔍 Starting performance audit for artekoucka.cz...");

    const metrics: PerformanceMetrics = {
      timestamp: Date.now(),
      version: await this.getProjectVersion(),
      denoVersion: await this.getDenoVersion(),
      buildSize: 0,
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      totalBlockingTime: 0,
      buildTime: 0,
      bundleAnalysis: {
        jsSize: 0,
        cssSize: 0,
        imageSize: 0,
        totalAssets: 0,
      },
    };

    try {
      // 1. Build performance
      await this.measureBuildTime(metrics);

      // 2. Bundle analysis
      await this.analyzeBundleSize(metrics);

      // 3. Runtime performance
      await this.measureRuntimePerformance(metrics);

      // 4. Uložení výsledků
      await this.saveMetrics(metrics);

      // 5. Porovnání s předchozími výsledky
      await this.compareWithPrevious(metrics);

      console.log("✅ Performance audit completed!");
      return metrics;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error("❌ Performance audit failed:", errorMessage);
      throw error;
    } finally {
      await this.cleanup();
    }
  }

  private async getProjectVersion(): Promise<string> {
    try {
      const denoJson = await Deno.readTextFile("deno.json");
      const config = JSON.parse(denoJson);

      // Extract Fresh version
      const freshUrl = config.imports?.["$fresh/"];
      const versionMatch = freshUrl?.match(/@([^\/]+)/);
      return versionMatch ? versionMatch[1] : "unknown";
    } catch {
      return "unknown";
    }
  }

  private async getDenoVersion(): Promise<string> {
    try {
      const cmd = new Deno.Command("deno", {
        args: ["--version"],
        stdout: "piped",
      });

      const { stdout } = await cmd.output();
      const output = new TextDecoder().decode(stdout);
      const match = output.match(/deno (\d+\.\d+\.\d+)/);
      return match ? match[1] : "unknown";
    } catch {
      return "unknown";
    }
  }

  private async measureBuildTime(metrics: PerformanceMetrics): Promise<void> {
    console.log("🏗️ Measuring build time...");

    const startTime = performance.now();

    try {
      const buildCmd = new Deno.Command("deno", {
        args: ["task", "build"],
        stdout: "piped",
        stderr: "piped",
      });

      const { code } = await buildCmd.output();

      if (code === 0) {
        const endTime = performance.now();
        metrics.buildTime = endTime - startTime;
        console.log(
          `  ✅ Build completed in ${metrics.buildTime.toFixed(2)}ms`,
        );
      } else {
        console.warn("  ⚠️ Build failed");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.warn("  ⚠️ Could not measure build time:", errorMessage);
    }
  }

  private async analyzeBundleSize(metrics: PerformanceMetrics): Promise<void> {
    console.log("📦 Analyzing bundle size...");

    try {
      let totalSize = 0;
      const bundleAnalysis = {
        jsSize: 0,
        cssSize: 0,
        imageSize: 0,
        totalAssets: 0,
      };

      // Analyze _fresh directory
      try {
        for await (const entry of Deno.readDir("./_fresh")) {
          if (entry.isFile) {
            const stat = await Deno.stat(`./_fresh/${entry.name}`);
            totalSize += stat.size;
            bundleAnalysis.totalAssets++;

            if (entry.name.endsWith(".js")) {
              bundleAnalysis.jsSize += stat.size;
            } else if (entry.name.endsWith(".css")) {
              bundleAnalysis.cssSize += stat.size;
            }
          }
        }
      } catch {
        // _fresh directory might not exist
      }

      // Analyze static assets
      try {
        for await (const entry of Deno.readDir("./static")) {
          await this.analyzeDirectory("./static", entry, bundleAnalysis);
        }
      } catch {
        console.warn("  ⚠️ Could not analyze static directory");
      }

      metrics.buildSize = totalSize;
      metrics.bundleAnalysis = bundleAnalysis;

      console.log(`  📊 Total build size: ${(totalSize / 1024).toFixed(2)} KB`);
      console.log(`  📄 JS: ${(bundleAnalysis.jsSize / 1024).toFixed(2)} KB`);
      console.log(`  🎨 CSS: ${(bundleAnalysis.cssSize / 1024).toFixed(2)} KB`);
      console.log(
        `  🖼️ Images: ${(bundleAnalysis.imageSize / 1024).toFixed(2)} KB`,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.warn("  ⚠️ Bundle analysis failed:", errorMessage);
    }
  }

  private async analyzeDirectory(
    basePath: string,
    entry: Deno.DirEntry,
    analysis: any,
  ): Promise<void> {
    const fullPath = `${basePath}/${entry.name}`;

    if (entry.isFile) {
      const stat = await Deno.stat(fullPath);
      analysis.totalAssets++;

      if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        analysis.imageSize += stat.size;
      } else if (entry.name.endsWith(".css")) {
        analysis.cssSize += stat.size;
      } else if (entry.name.endsWith(".js")) {
        analysis.jsSize += stat.size;
      }
    } else if (entry.isDirectory) {
      try {
        for await (const subEntry of Deno.readDir(fullPath)) {
          await this.analyzeDirectory(fullPath, subEntry, analysis);
        }
      } catch {
        // Skip inaccessible directories
      }
    }
  }

  private async measureRuntimePerformance(
    metrics: PerformanceMetrics,
  ): Promise<void> {
    console.log("🚀 Starting dev server for performance testing...");

    try {
      // Start dev server
      const startCmd = new Deno.Command("deno", {
        args: ["task", "start"],
        stdout: "piped",
        stderr: "piped",
      });

      this.serverProcess = startCmd.spawn();

      // Wait for server to start
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Measure load time
      const loadStart = performance.now();

      try {
        const response = await fetch("http://localhost:8000");
        if (response.ok) {
          await response.text();
          const loadEnd = performance.now();
          metrics.loadTime = loadEnd - loadStart;
          console.log(`  ✅ Page load time: ${metrics.loadTime.toFixed(2)}ms`);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.warn("  ⚠️ Could not measure load time:", errorMessage);
      }

      // Try to run Lighthouse if available
      await this.runLighthouseAudit(metrics);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.warn(
        "  ⚠️ Runtime performance measurement failed:",
        errorMessage,
      );
    }
  }

  private async runLighthouseAudit(metrics: PerformanceMetrics): Promise<void> {
    console.log("🏮 Attempting Lighthouse audit...");

    try {
      // Check if lighthouse is available
      const checkCmd = new Deno.Command("npx", {
        args: ["lighthouse", "--version"],
        stdout: "piped",
        stderr: "piped",
      });

      const { code } = await checkCmd.output();

      if (code !== 0) {
        console.log("  ℹ️ Lighthouse not available, skipping detailed metrics");
        return;
      }

      // Run lighthouse
      const lighthouseCmd = new Deno.Command("npx", {
        args: [
          "lighthouse",
          "http://localhost:8000",
          "--output=json",
          "--output-path=./lighthouse-report.json",
          "--chrome-flags=--headless --no-sandbox",
          "--only-categories=performance",
          "--quiet",
        ],
        stdout: "piped",
        stderr: "piped",
      });

      const { code: lighthouseCode } = await lighthouseCmd.output();

      if (lighthouseCode === 0) {
        try {
          const reportContent = await Deno.readTextFile(
            "./lighthouse-report.json",
          );
          const report = JSON.parse(reportContent);

          const audits = report.lhr?.audits;
          if (audits) {
            metrics.firstContentfulPaint =
              audits["first-contentful-paint"]?.numericValue || 0;
            metrics.largestContentfulPaint =
              audits["largest-contentful-paint"]?.numericValue || 0;
            metrics.cumulativeLayoutShift =
              audits["cumulative-layout-shift"]?.numericValue || 0;
            metrics.totalBlockingTime =
              audits["total-blocking-time"]?.numericValue || 0;

            console.log("  ✅ Lighthouse metrics captured");

            // Clean up report file
            try {
              await Deno.remove("./lighthouse-report.json");
            } catch {
              // File might not exist
            }
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : String(error);
          console.warn("  ⚠️ Could not parse Lighthouse report:", errorMessage);
        }
      } else {
        console.log("  ℹ️ Lighthouse audit failed, using basic metrics only");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.log("  ℹ️ Lighthouse not available:", errorMessage);
    }
  }

  private async saveMetrics(metrics: PerformanceMetrics): Promise<void> {
    let allMetrics: PerformanceMetrics[] = [];

    try {
      const existingContent = await Deno.readTextFile(this.metricsFile);
      allMetrics = JSON.parse(existingContent);
    } catch {
      // File doesn't exist yet
    }

    allMetrics.push(metrics);

    // Keep only last 20 records
    if (allMetrics.length > 20) {
      allMetrics = allMetrics.slice(-20);
    }

    await Deno.writeTextFile(
      this.metricsFile,
      JSON.stringify(allMetrics, null, 2),
    );

    console.log(`📊 Metrics saved to ${this.metricsFile}`);
  }

  private async compareWithPrevious(
    currentMetrics: PerformanceMetrics,
  ): Promise<void> {
    try {
      const existingContent = await Deno.readTextFile(this.metricsFile);
      const allMetrics: PerformanceMetrics[] = JSON.parse(existingContent);

      if (allMetrics.length < 2) {
        console.log("📈 No previous metrics to compare with");
        return;
      }

      const previousMetrics = allMetrics[allMetrics.length - 2];

      console.log("\n📊 Performance Comparison:");
      console.log("================================");

      this.logComparison(
        "Build Time",
        previousMetrics.buildTime,
        currentMetrics.buildTime,
        "ms",
      );
      this.logComparison(
        "Build Size",
        previousMetrics.buildSize,
        currentMetrics.buildSize,
        "bytes",
        true,
      );
      this.logComparison(
        "Load Time",
        previousMetrics.loadTime,
        currentMetrics.loadTime,
        "ms",
      );

      if (currentMetrics.firstContentfulPaint > 0) {
        this.logComparison(
          "FCP",
          previousMetrics.firstContentfulPaint,
          currentMetrics.firstContentfulPaint,
          "ms",
        );
        this.logComparison(
          "LCP",
          previousMetrics.largestContentfulPaint,
          currentMetrics.largestContentfulPaint,
          "ms",
        );
        this.logComparison(
          "CLS",
          previousMetrics.cumulativeLayoutShift,
          currentMetrics.cumulativeLayoutShift,
          "",
        );
        this.logComparison(
          "TBT",
          previousMetrics.totalBlockingTime,
          currentMetrics.totalBlockingTime,
          "ms",
        );
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.warn("⚠️ Could not compare with previous metrics:", errorMessage);
    }
  }

  private logComparison(
    metric: string,
    previous: number,
    current: number,
    unit: string,
    isSize = false,
  ): void {
    const diff = current - previous;
    const percentChange = previous > 0 ? (diff / previous) * 100 : 0;

    let symbol = "➡️";
    let color = "🟡";

    if (isSize) {
      // For size metrics, smaller is better
      symbol = diff > 0 ? "📈" : diff < 0 ? "📉" : "➡️";
      color = diff > 0 ? "🔴" : diff < 0 ? "🟢" : "🟡";
    } else {
      // For time metrics, smaller is better
      symbol = diff > 0 ? "📈" : diff < 0 ? "📉" : "➡️";
      color = diff > 0 ? "🔴" : diff < 0 ? "🟢" : "🟡";
    }

    const currentValue =
      unit === "bytes"
        ? (current / 1024).toFixed(2) + "KB"
        : current.toFixed(2) + unit;
    const diffValue =
      unit === "bytes"
        ? (Math.abs(diff) / 1024).toFixed(2) + "KB"
        : Math.abs(diff).toFixed(2) + unit;

    console.log(
      `${symbol} ${metric}: ${currentValue} ` +
        `(${diff > 0 ? "+" : ""}${percentChange.toFixed(1)}%, ±${diffValue}) ${color}`,
    );
  }

  private async cleanup(): Promise<void> {
    if (this.serverProcess) {
      try {
        this.serverProcess.kill();
        await this.serverProcess.status;
      } catch {
        // Process might already be dead
      }
    }
  }

  async generateReport(): Promise<void> {
    try {
      const content = await Deno.readTextFile(this.metricsFile);
      const metrics: PerformanceMetrics[] = JSON.parse(content);

      const reportContent = this.generateMarkdownReport(metrics);
      await Deno.writeTextFile("./performance-report.md", reportContent);

      console.log("📄 Performance report generated: ./performance-report.md");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error("❌ Could not generate report:", errorMessage);
    }
  }

  private generateMarkdownReport(metrics: PerformanceMetrics[]): string {
    const latest = metrics[metrics.length - 1];

    return `# Performance Report - artekoucka.cz

## Latest Metrics (${new Date(latest.timestamp).toLocaleString()})

### Environment
- **Project Version**: ${latest.version}
- **Deno Version**: ${latest.denoVersion}
- **Timestamp**: ${new Date(latest.timestamp).toISOString()}

### Build Performance
- **Build Time**: ${latest.buildTime.toFixed(2)} ms
- **Build Size**: ${(latest.buildSize / 1024).toFixed(2)} KB
- **Total Assets**: ${latest.bundleAnalysis.totalAssets}

### Bundle Analysis
- **JavaScript**: ${(latest.bundleAnalysis.jsSize / 1024).toFixed(2)} KB
- **CSS**: ${(latest.bundleAnalysis.cssSize / 1024).toFixed(2)} KB
- **Images**: ${(latest.bundleAnalysis.imageSize / 1024).toFixed(2)} KB

### Runtime Performance
- **Load Time**: ${latest.loadTime.toFixed(2)} ms
${
  latest.firstContentfulPaint > 0
    ? `
### Core Web Vitals
- **First Contentful Paint**: ${latest.firstContentfulPaint.toFixed(2)} ms ${this.getWebVitalGrade("FCP", latest.firstContentfulPaint)}
- **Largest Contentful Paint**: ${latest.largestContentfulPaint.toFixed(2)} ms ${this.getWebVitalGrade("LCP", latest.largestContentfulPaint)}
- **Cumulative Layout Shift**: ${latest.cumulativeLayoutShift.toFixed(4)} ${this.getWebVitalGrade("CLS", latest.cumulativeLayoutShift)}
- **Total Blocking Time**: ${latest.totalBlockingTime.toFixed(2)} ms ${this.getWebVitalGrade("TBT", latest.totalBlockingTime)}
`
    : ""
}

## Historical Data

| Date | Version | Deno | Build Time (ms) | Build Size (KB) | Load Time (ms) |
|------|---------|------|----------------|-----------------|----------------|
${metrics
  .slice(-10)
  .map(
    (m) =>
      `| ${new Date(m.timestamp).toLocaleDateString()} | ${m.version} | ${m.denoVersion} | ${m.buildTime.toFixed(0)} | ${(m.buildSize / 1024).toFixed(1)} | ${m.loadTime.toFixed(0)} |`,
  )
  .join("\n")}

---
*Generated by performance-audit.ts*
`;
  }

  private getWebVitalGrade(metric: string, value: number): string {
    let grade = "";
    let emoji = "";

    switch (metric) {
      case "FCP":
        if (value <= 1800) {
          grade = "Good";
          emoji = "🟢";
        } else if (value <= 3000) {
          grade = "Needs Improvement";
          emoji = "🟡";
        } else {
          grade = "Poor";
          emoji = "🔴";
        }
        break;
      case "LCP":
        if (value <= 2500) {
          grade = "Good";
          emoji = "🟢";
        } else if (value <= 4000) {
          grade = "Needs Improvement";
          emoji = "🟡";
        } else {
          grade = "Poor";
          emoji = "🔴";
        }
        break;
      case "CLS":
        if (value <= 0.1) {
          grade = "Good";
          emoji = "🟢";
        } else if (value <= 0.25) {
          grade = "Needs Improvement";
          emoji = "🟡";
        } else {
          grade = "Poor";
          emoji = "🔴";
        }
        break;
      case "TBT":
        if (value <= 200) {
          grade = "Good";
          emoji = "🟢";
        } else if (value <= 600) {
          grade = "Needs Improvement";
          emoji = "🟡";
        } else {
          grade = "Poor";
          emoji = "🔴";
        }
        break;
    }

    return `${emoji} ${grade}`;
  }
}

// Spuštění auditu
if (import.meta.main) {
  const auditor = new PerformanceAuditor();

  const args = Deno.args;

  try {
    if (args.includes("--report")) {
      await auditor.generateReport();
    } else if (args.includes("--help")) {
      console.log(`
Performance Audit Tool for artekoucka.cz

Usage:
  deno run -A scripts/performance-audit.ts           # Run full audit
  deno run -A scripts/performance-audit.ts --report  # Generate markdown report
  deno run -A scripts/performance-audit.ts --help    # Show this help

The audit measures:
- Build time and size
- Bundle analysis (JS, CSS, images)
- Runtime performance (load time)
- Core Web Vitals (if Lighthouse available)

Results are saved to performance-metrics.json
      `);
    } else {
      const metrics = await auditor.runAudit();

      console.log("\n🎯 Summary:");
      console.log(
        `Build: ${metrics.buildTime.toFixed(0)}ms, ${(metrics.buildSize / 1024).toFixed(1)}KB`,
      );
      console.log(`Load: ${metrics.loadTime.toFixed(0)}ms`);
      console.log(
        "\n💡 Run with --report to generate detailed markdown report",
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("❌ Audit failed:", errorMessage);
    Deno.exit(1);
  }
}
