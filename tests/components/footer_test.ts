import {
  assertEquals,
  assertExists,
  renderComponent,
} from "../utils/test-utils.ts";
import Footer from "_/footer/footer.tsx";
import { defaultFooterNavProps } from "_/footer/footer-nav.tsx";

Deno.test("Footer component", async (t) => {
  await t.step("renders correctly", async () => {
    const html = await renderComponent(() => Footer(defaultFooterNavProps));
    assertExists(html);
    assertEquals(html.includes("footer"), true);
  });

  await t.step("includes contact information", async () => {
    const html = await renderComponent(() => Footer(defaultFooterNavProps));
    assertEquals(html.includes("Marta Sojková"), true);
    assertEquals(html.includes("marta@artekoucka.cz"), true);
  });
});
