import { assertEquals } from "../utils/test-utils.ts";
import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../../fresh.gen.ts";
import config from "../../fresh.config.ts";

Deno.test("Services page route", async (t) => {
  const handler = await createHandler(manifest, config);

  await t.step("returns 200 status", async () => {
    const req = new Request("http://localhost:8000/sluzby");
    const resp = await handler(req, {} as ServeHandlerInfo);
    assertEquals(resp.status, 200);
  });

  await t.step("includes service content", async () => {
    const req = new Request("http://localhost:8000/sluzby");
    const resp = await handler(req, {} as ServeHandlerInfo);
    const html = await resp.text();
    assertEquals(html.includes("Individuální koučink"), true);
    assertEquals(html.includes("Týmový koučink"), true);
  });
});
