import { assertEquals, assertExists } from "../utils/test-utils.ts";

Deno.test("Performance tests", async (t) => {
  await t.step("homepage loads within acceptable time", async () => {
    const start = performance.now();
    const response = await fetch("http://localhost:8000/");
    const end = performance.now();

    assertEquals(response.status, 200);
    const loadTime = end - start;
    console.log(`Homepage load time: ${loadTime.toFixed(2)}ms`);

    // Should load within 2 seconds
    assertEquals(
      loadTime < 2000,
      true,
      `Load time ${loadTime}ms exceeds 2000ms threshold`,
    );
  });

  await t.step("static assets are cached", async () => {
    const response = await fetch("http://localhost:8000/css/style.css");
    assertEquals(response.status, 200);

    const cacheControl = response.headers.get("cache-control");
    assertExists(cacheControl, "Cache-Control header should be present");
  });
});
