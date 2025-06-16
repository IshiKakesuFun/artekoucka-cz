export interface MetricData {
  name: string;
  value: number;
  timestamp: number;
  tags?: Record<string, string>;
}

export class SimpleMetrics {
  private metrics: MetricData[] = [];
  private maxMetrics = 1000;

  increment(name: string, value = 1, tags?: Record<string, string>) {
    this.addMetric(name, value, tags);
  }

  gauge(name: string, value: number, tags?: Record<string, string>) {
    this.addMetric(name, value, tags);
  }

  timing(name: string, duration: number, tags?: Record<string, string>) {
    this.addMetric(name, duration, tags);
  }

  private addMetric(
    name: string,
    value: number,
    tags?: Record<string, string>,
  ) {
    const metric: MetricData = {
      name,
      value,
      timestamp: Date.now(),
      tags,
    };
    this.metrics.push(metric);
    // Omezení velikosti metriky
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
    // V produkci by se posílalo do monitoring služby
    if (Deno.env.get("DENO_ENV") === "production") {
      this.sendToMonitoring(metric);
    }
  }

  private async sendToMonitoring(metric: MetricData) {
    // Zde by byla integrace s monitoring službou (DataDog, New Relic, atd.)
    // Pro demonstraci pouze logujeme
    console.log(
      `METRIC: ${metric.name}=${metric.value} ${JSON.stringify(metric.tags || {})}`,
    );
  }

  getMetrics(name?: string): MetricData[] {
    if (name) {
      return this.metrics.filter((m) => m.name === name);
    }
    return [...this.metrics];
  }

  getAverageTime(name: string, timeRange = 3600000): number {
    // 1 hodina
    const cutoff = Date.now() - timeRange;
    const relevantMetrics = this.metrics.filter(
      (m) => m.name === name && m.timestamp > cutoff,
    );
    if (relevantMetrics.length === 0) return 0;
    const sum = relevantMetrics.reduce((acc, m) => acc + m.value, 0);
    return sum / relevantMetrics.length;
  }
}

// Globální instance metriky
export const metrics = new SimpleMetrics();
