import {
  assertEquals,
  assertExists,
  renderComponent,
} from "../utils/test-utils.ts";
import Header from "_/header/header.tsx";
import { MenuLinkType } from "_/header/navigation.tsx";

Deno.test("Header component", async (t) => {
  const testMenu: MenuLinkType[] = [
    { title: "Test", href: "/test" },
    { title: "CTA", href: "/cta", isCallToAction: true },
  ];

  await t.step("renders correctly with menu", async () => {
    const html = await renderComponent(() => Header({ menu: testMenu }));
    assertExists(html);
    assertEquals(html.includes("header"), true);
  });

  await t.step("includes navigation", async () => {
    const html = await renderComponent(() => Header({ menu: testMenu }));
    assertEquals(html.includes("nav"), true);
  });
});
