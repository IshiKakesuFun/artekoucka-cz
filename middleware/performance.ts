import { FreshContext } from "$fresh/server.ts";

export async function performanceMiddleware(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  // Cache control pro statické assety
  if (
    url.pathname.startsWith("/static/") ||
    url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2)$/)
  ) {
    const response = await ctx.next();
    // Cache na 1 rok pro statické soubory
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
    return response;
  }
  // Komprese pro HTML
  const response = await ctx.next();
  if (response.headers.get("content-type")?.includes("text/html")) {
    // Přidání cache control pro HTML stránky
    response.headers.set("Cache-Control", "public, max-age=300"); // 5 minut
  }
  return response;
}
