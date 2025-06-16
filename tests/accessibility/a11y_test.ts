import { assertEquals, parseHTML } from "../utils/test-utils.ts";

Deno.test("Accessibility tests", async (t) => {
  await t.step("homepage has proper heading structure", async () => {
    const response = await fetch("http://localhost:8000/");
    const html = await response.text();
    const doc = parseHTML(html);

    const h1 = doc?.querySelector("h1");
    assertEquals(h1 !== null, true, "Page should have an h1 element");
  });

  await t.step("images have alt attributes", async () => {
    const response = await fetch("http://localhost:8000/");
    const html = await response.text();
    const doc = parseHTML(html);

    const images = doc?.querySelectorAll("img");
    images?.forEach((img, index) => {
      const alt = img.getAttribute("alt");
      assertEquals(
        alt !== null && alt !== "",
        true,
        `Image ${index + 1} should have non-empty alt attribute`,
      );
    });
  });

  await t.step("forms have proper labels", async () => {
    const response = await fetch("http://localhost:8000/");
    const html = await response.text();
    const doc = parseHTML(html);

    const inputs = doc?.querySelectorAll("input");
    inputs?.forEach((input, index) => {
      const id = input.getAttribute("id");
      if (id) {
        const label = doc.querySelector(`label[for="${id}"]`);
        assertEquals(
          label !== null,
          true,
          `Input ${index + 1} with id="${id}" should have corresponding label`,
        );
      }
    });
  });
});
