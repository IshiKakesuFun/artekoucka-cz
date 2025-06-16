import { FreshContext } from "$fresh/server.ts";

interface AnalyticsEvent {
  timestamp: number;
  path: string;
  method: string;
  userAgent?: string;
  referer?: string;
  responseTime: number;
  statusCode: number;
  ip?: string;
}

export async function analyticsMiddleware(req: Request, ctx: FreshContext) {
  const startTime = performance.now();
  // Získání základních informací o requestu
  const url = new URL(req.url);
  const path = url.pathname;
  const method = req.method;
  const userAgent = req.headers.get("user-agent");
  const referer = req.headers.get("referer");
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  // Zpracování requestu
  const response = await ctx.next();
  // Výpočet času odpovědi
  const responseTime = performance.now() - startTime;
  // Vytvoření analytics eventu
  const event: AnalyticsEvent = {
    timestamp: Date.now(),
    path,
    method,
    userAgent: userAgent || undefined,
    referer: referer || undefined,
    responseTime,
    statusCode: response.status,
    ip,
  };
  // Logování (v produkci by se poslalo do analytics služby)
  if (Deno.env.get("DENO_ENV") === "production") {
    console.log(JSON.stringify(event));
  }
  // Přidání performance headerů
  response.headers.set("x-response-time", `${responseTime.toFixed(2)}ms`);
  return response;
}
