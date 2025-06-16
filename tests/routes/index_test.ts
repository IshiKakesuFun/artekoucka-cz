import { assertEquals } from "../utils/test-utils.ts";
import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../../fresh.gen.ts";
import config from "../../fresh.config.ts";

Deno.test("Homepage route", async (t) => {
  const handler = await createHandler(manifest, config);

  await t.step("returns 200 status", async () => {
    const req = new Request("http://localhost:8000/");
    const resp = await handler(req, {} as ServeHandlerInfo);
    assertEquals(resp.status, 200);
  });

  await t.step("returns HTML content", async () => {
    const req = new Request("http://localhost:8000/");
    const resp = await handler(req, {} as ServeHandlerInfo);
    const contentType = resp.headers.get("content-type");
    assertEquals(contentType?.includes("text/html"), true);
  });

  await t.step("includes main navigation", async () => {
    const req = new Request("http://localhost:8000/");
    const resp = await handler(req, {} as ServeHandlerInfo);
    const html = await resp.text();
    assertEquals(html.includes("Artekoučink"), true);
    assertEquals(html.includes("Služby"), true);
    assertEquals(html.includes("O mně"), true);
  });
});
