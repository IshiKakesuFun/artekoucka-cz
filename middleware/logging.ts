import { FreshContext } from "$fresh/server.ts";

export interface LogEntry {
  timestamp: string;
  level: "DEBUG" | "INFO" | "WARN" | "ERROR";
  message: string;
  data?: unknown;
  requestId?: string;
}

export class Logger {
  private logLevel: string;

  constructor() {
    this.logLevel = Deno.env.get("LOG_LEVEL") || "INFO";
  }

  private shouldLog(level: string): boolean {
    const levels = ["DEBUG", "INFO", "WARN", "ERROR"];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex >= currentLevelIndex;
  }

  private log(
    level: "DEBUG" | "INFO" | "WARN" | "ERROR",
    message: string,
    data?: unknown,
    requestId?: string,
  ) {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      requestId,
    };

    // Structured logging pro produkci
    if (Deno.env.get("DENO_ENV") === "production") {
      console.log(JSON.stringify(entry));
    } else {
      // Čitelnější format pro development
      const dataStr = data ? ` | ${JSON.stringify(data)}` : "";
      const reqStr = requestId ? ` [${requestId}]` : "";
      console.log(
        `[${entry.timestamp}] ${level}${reqStr}: ${message}${dataStr}`,
      );
    }
  }

  debug(message: string, data?: unknown, requestId?: string) {
    this.log("DEBUG", message, data, requestId);
  }

  info(message: string, data?: unknown, requestId?: string) {
    this.log("INFO", message, data, requestId);
  }

  warn(message: string, data?: unknown, requestId?: string) {
    this.log("WARN", message, data, requestId);
  }

  error(message: string, data?: unknown, requestId?: string) {
    this.log("ERROR", message, data, requestId);
  }
}

export const logger = new Logger();

export async function loggingMiddleware(req: Request, ctx: FreshContext) {
  const requestId = crypto.randomUUID().substring(0, 8);
  const startTime = performance.now();
  const url = new URL(req.url);

  logger.info(
    `${req.method} ${url.pathname}`,
    {
      userAgent: req.headers.get("user-agent"),
      referer: req.headers.get("referer"),
      ip: req.headers.get("x-forwarded-for"),
    },
    requestId,
  );

  try {
    const response = await ctx.next();
    const responseTime = performance.now() - startTime;

    logger.info(
      `${req.method} ${url.pathname} - ${response.status}`,
      {
        responseTime: `${responseTime.toFixed(2)}ms`,
        size: response.headers.get("content-length"),
      },
      requestId,
    );

    return response;
  } catch (error) {
    const responseTime = performance.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;

    logger.error(
      `${req.method} ${url.pathname} - ERROR`,
      {
        error: errorMessage,
        stack: errorStack,
        responseTime: `${responseTime.toFixed(2)}ms`,
      },
      requestId,
    );

    throw error;
  }
}
