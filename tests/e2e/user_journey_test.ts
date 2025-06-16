import { assertEquals } from "../utils/test-utils.ts";

// Note: Toto by mohlo být rozšířeno o Playwright pro komplexní E2E testy
Deno.test("Basic user journey", async (t) => {
  await t.step("user can navigate through main pages", async () => {
    // Test homepage
    let response = await fetch("http://localhost:8000/");
    assertEquals(response.status, 200);

    // Test services page
    response = await fetch("http://localhost:8000/sluzby");
    assertEquals(response.status, 200);

    // Test about page
    response = await fetch("http://localhost:8000/o-mne");
    assertEquals(response.status, 200);

    // Test GDPR page
    response = await fetch(
      "http://localhost:8000/informace-o-zpracovani-osobnich-udaju",
    );
    assertEquals(response.status, 200);

    // Test terms page
    response = await fetch("http://localhost:8000/vseobecne-obchodni-podminky");
    assertEquals(response.status, 200);
  });
});

export function assertExists<T>(
  actual: T,
  msg?: string,
): asserts actual is NonNullable<T> {
  if (actual === null || actual === undefined) {
    throw new Error(msg ?? `Expected value to exist but got ${actual}`);
  }
}
