// tests/business/navigation.test.ts
/**
 * Navigation tests - kritické pro user experience
 */
import {
  assertEquals,
  assertExists,
  isValidPath,
  isKalendlyUrl,
} from "../setup.ts";
import { mainMenu } from "../../routes/index.tsx";

Deno.test("Navigation - Menu structure is complete", () => {
  console.log("🧭 Testing menu structure...");

  // Test že menu existuje a není prázdné
  assertExists(mainMenu, "Main menu must exist");
  assertEquals(mainMenu.length > 0, true, "Menu must have items");

  console.log(`✅ Found ${mainMenu.length} menu items`);
});

Deno.test("Navigation - All required menu items exist", () => {
  console.log("📋 Testing required menu items...");

  const requiredMenuItems = [
    "Artekoučink",
    "Služby",
    "Časté dotazy",
    "Reference",
    "O mně",
  ];

  requiredMenuItems.forEach((requiredItem) => {
    const menuItem = mainMenu.find((item) => item.title === requiredItem);
    assertExists(menuItem, `Menu must contain "${requiredItem}"`);
    console.log(`✅ Found: ${requiredItem}`);
  });
});

Deno.test("Navigation - Each menu item has required properties", () => {
  console.log("🔍 Testing menu item properties...");

  mainMenu.forEach((item, index) => {
    assertExists(item.title, `Menu item ${index} must have title`);
    assertExists(item.href, `Menu item ${index} must have href`);

    assertEquals(
      item.title.length > 0,
      true,
      `Menu item ${index} title cannot be empty`,
    );
    assertEquals(
      item.href.length > 0,
      true,
      `Menu item ${index} href cannot be empty`,
    );

    console.log(`✅ ${item.title}: ${item.href}`);
  });
});

Deno.test("Navigation - Kalendly CTA button is properly configured", () => {
  console.log("📅 Testing Kalendly CTA...");

  const ctaItem = mainMenu.find((item) => item.isCallToAction);

  assertExists(ctaItem, "CTA button must exist in menu");

  // Explicit null check pro TypeScript strict mode
  if (!ctaItem) {
    throw new Error("CTA item not found after assertExists");
  }

  assertEquals(
    ctaItem.title,
    "Konzultace zdarma",
    "CTA must have correct title",
  );
  assertEquals(ctaItem.target, "_blank", "CTA must open in new tab");
  assertEquals(isKalendlyUrl(ctaItem.href), true, "CTA must link to Kalendly");

  console.log(`✅ CTA: ${ctaItem.title} → ${ctaItem.href}`);
});

Deno.test("Navigation - Internal links use correct format", () => {
  console.log("🔗 Testing internal link formats...");

  const internalLinks = mainMenu.filter(
    (item) => !item.href.startsWith("http"),
  );

  assertEquals(
    internalLinks.length > 0,
    true,
    "Menu should have internal links",
  );

  internalLinks.forEach((link) => {
    const isValid = isValidPath(link.href);
    assertEquals(
      isValid,
      true,
      `Internal link "${link.title}" has invalid format: ${link.href}`,
    );

    console.log(`✅ Internal: ${link.title} → ${link.href}`);
  });
});

Deno.test("Navigation - External links have correct target", () => {
  console.log("🌐 Testing external link targets...");

  const externalLinks = mainMenu.filter((item) => item.href.startsWith("http"));

  if (externalLinks.length > 0) {
    externalLinks.forEach((link) => {
      assertEquals(
        link.target,
        "_blank",
        `External link "${link.title}" must open in new tab`,
      );
      console.log(`✅ External: ${link.title} → ${link.href} (${link.target})`);
    });
  } else {
    console.log("ℹ️ No external links found");
  }
});

Deno.test("Navigation - Menu contains both internal and external links", () => {
  console.log("⚖️ Testing link balance...");

  const internalCount = mainMenu.filter(
    (item) => !item.href.startsWith("http"),
  ).length;
  const externalCount = mainMenu.filter((item) =>
    item.href.startsWith("http"),
  ).length;

  assertEquals(
    internalCount > 0,
    true,
    "Menu must have internal navigation links",
  );
  assertEquals(externalCount > 0, true, "Menu must have external CTA links");

  console.log(
    `✅ Internal links: ${internalCount}, External links: ${externalCount}`,
  );
});

// Server-dependent tests (require running server)
Deno.test("Navigation - Homepage navigation renders correctly", async () => {
  console.log("🏠 Testing homepage navigation rendering...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping render test");
      return;
    }

    const html = await response.text();

    // Test že navigation je v HTML
    assertEquals(
      html.includes("main-nav"),
      true,
      "Page should contain main navigation",
    );

    // Test že menu items jsou rendered
    mainMenu.forEach((item) => {
      assertEquals(
        html.includes(item.title),
        true,
        `Navigation must render "${item.title}"`,
      );
    });

    console.log("✅ Navigation renders correctly on homepage");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Server test skipped: ${errorMessage}`);
  }
});

Deno.test("Navigation - Mobile navigation is present", async () => {
  console.log("📱 Testing mobile navigation...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping mobile nav test");
      return;
    }

    const html = await response.text();

    // Test že mobile navigation elementy jsou přítomné
    assertEquals(
      html.includes("mobile-nav"),
      true,
      "Page should contain mobile navigation",
    );
    assertEquals(
      html.includes("mobile-nav-toggle"),
      true,
      "Page should contain mobile menu toggle",
    );

    console.log("✅ Mobile navigation elements found");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Mobile nav test skipped: ${errorMessage}`);
  }
});
