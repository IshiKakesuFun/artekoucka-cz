import { FreshContext } from "$fresh/server.ts";
import { analyticsMiddleware } from "#/analytics.ts";
import { securityMiddleware } from "#/security.ts";
import { performanceMiddleware } from "#/performance.ts";
import { loggingMiddleware } from "#/logging.ts";

export async function handler(req: Request, ctx: FreshContext) {
  //   console.log(ctx.destination);
  //   console.log(req.url);
  // const resp = await ctx.next();
  // return resp;
  // Aplikace middleware v pořadí
  return await loggingMiddleware(req, {
    ...ctx,
    next: async () =>
      await analyticsMiddleware(req, {
        ...ctx,
        next: async () =>
          await securityMiddleware(req, {
            ...ctx,
            next: async () => await performanceMiddleware(req, ctx),
          }),
      }),
  });
}
