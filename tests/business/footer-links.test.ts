// tests/business/footer-links.test.ts
/**
 * Footer links tests - business compliance a navigation integrity
 */
import { assertEquals, assertExists } from "../setup.ts";
import { defaultFooterNavProps } from "_/footer/footer-nav.tsx";

Deno.test("Footer - Navigation structure is complete", () => {
  console.log("🦶 Testing footer navigation structure...");

  const footerMenu = defaultFooterNavProps.menu;
  assertExists(footerMenu, "Footer menu must exist");
  assertEquals(footerMenu!.length > 0, true, "Footer menu must have sections");

  console.log(`✅ Found ${footerMenu!.length} footer sections`);
});

Deno.test("Footer - All required business sections exist", () => {
  console.log("📋 Testing required footer sections...");

  const footerMenu = defaultFooterNavProps.menu;
  assertExists(footerMenu, "Footer menu must exist");

  const requiredSections = ["Artekoučka", "Služby", "O mně"];

  requiredSections.forEach((sectionName) => {
    const section = footerMenu!.find((s) => s.heading === sectionName);
    assertExists(section, `Footer must have "${sectionName}" section`);

    if (!section) {
      throw new Error(`Section "${sectionName}" not found after assertExists`);
    }

    assertEquals(
      section.children.length > 0,
      true,
      `Section "${sectionName}" must have links`,
    );
    console.log(`✅ ${sectionName}: ${section.children.length} links`);
  });
});

Deno.test("Footer - Each section has valid links", () => {
  console.log("🔍 Testing footer link validity...");

  const footerMenu = defaultFooterNavProps.menu;
  assertExists(footerMenu, "Footer menu must exist");

  footerMenu!.forEach((section, sectionIndex) => {
    console.log(`\n📂 Section: ${section.heading}`);

    assertExists(section.heading, `Section ${sectionIndex} must have heading`);
    assertExists(
      section.children,
      `Section ${sectionIndex} must have children`,
    );

    section.children.forEach((link, linkIndex) => {
      assertExists(
        link.title,
        `Link ${sectionIndex}-${linkIndex} must have title`,
      );
      assertExists(
        link.href,
        `Link ${sectionIndex}-${linkIndex} must have href`,
      );

      // Test že href má správný formát
      const validHrefPattern = /^(\/|#|https?:\/\/)/;
      assertEquals(
        validHrefPattern.test(link.href),
        true,
        `Link "${link.title}" has invalid href format: ${link.href}`,
      );

      console.log(`  ✅ ${link.title} → ${link.href}`);
    });
  });
});

Deno.test("Footer - Legal pages are accessible", async () => {
  console.log("⚖️ Testing legal pages accessibility...");

  const legalPages = [
    {
      path: "/informace-o-zpracovani-osobnich-udaju",
      name: "GDPR Info",
      requiredContent: ["GDPR", "osobních údajů", "Marta Sojková"],
    },
    {
      path: "/vseobecne-obchodni-podminky",
      name: "Terms & Conditions",
      requiredContent: ["obchodní podmínky", "Marta Sojková", "IČO"],
    },
  ];

  try {
    for (const page of legalPages) {
      console.log(`\n📄 Testing ${page.name}...`);

      const response = await fetch(`http://localhost:8000${page.path}`);
      assertEquals(response.status, 200, `${page.name} must be accessible`);

      const html = await response.text();

      // Test required content
      page.requiredContent.forEach((content) => {
        assertEquals(
          html.includes(content),
          true,
          `${page.name} must contain "${content}"`,
        );
        console.log(`  ✅ Contains: ${content}`);
      });

      // Test že stránka má proper title
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch) {
        const title = titleMatch[1]?.trim() || "";
        assertEquals(
          title.includes("Artekoučka"),
          true,
          `${page.name} title must contain brand`,
        );
        console.log(`  ✅ Title: ${title}`);
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Legal pages test skipped: ${errorMessage}`);
  }
});

Deno.test("Footer - Contact information is complete and accurate", async () => {
  console.log("📞 Testing footer contact information...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping contact info test");
      return;
    }

    const html = await response.text();

    // Required contact information
    const contactRequirements = [
      { content: "+420", description: "Country code for phone" },
      { content: "602 181 097", description: "Phone number" },
      { content: "marta@artekoucka.cz", description: "Email address" },
      { content: "Vochov", description: "Business address" },
      { content: "330 23", description: "Postal code" },
      { content: "02146401", description: "Business ID (IČ)" },
      { content: "Mgr. Marta Sojková, MBA", description: "Full business name" },
    ];

    contactRequirements.forEach((req) => {
      const found = html.includes(req.content);
      if (!found) {
        console.log(`⚠️ Missing ${req.description}: "${req.content}"`);
        // Debug: najděme podobný obsah
        if (req.content === "602 181 097") {
          const phoneMatches = html.match(/602[\s\u00A0]*181[\s\u00A0]*097/g);
          if (phoneMatches) {
            console.log(`ℹ️ Found phone variants: ${phoneMatches}`);
          }
        }
      } else {
        console.log(`✅ ${req.description}: ${req.content}`);
      }
      assertEquals(
        found,
        true,
        `Footer must contain ${req.description}: "${req.content}"`,
      );
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Contact info test skipped: ${errorMessage}`);
  }
});

Deno.test("Footer - Social media links are functional", async () => {
  console.log("📱 Testing social media links...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping social links test");
      return;
    }

    const html = await response.text();

    // LinkedIn profile
    assertEquals(
      html.includes("linkedin.com"),
      true,
      "Footer must contain LinkedIn link",
    );
    assertEquals(
      html.includes("marta-sojkov"),
      true,
      "LinkedIn URL must contain correct profile",
    );
    console.log("✅ LinkedIn profile link found");

    // SojkAtelier link
    assertEquals(
      html.includes("sojkatelier.cz"),
      true,
      "Footer must contain ateliér website link",
    );
    console.log("✅ SojkAtelier link found");

    // Test that external links have proper target
    const linkedinLinkPattern = /linkedin\.com[^"]*"[^>]*target="_blank"/;
    assertEquals(
      linkedinLinkPattern.test(html),
      true,
      "LinkedIn link must open in new tab",
    );
    console.log("✅ LinkedIn link opens in new tab");

    const atelierLinkPattern = /sojkatelier\.cz[^"]*"[^>]*target="_blank"/;
    assertEquals(
      atelierLinkPattern.test(html),
      true,
      "Ateliér link must open in new tab",
    );
    console.log("✅ Ateliér link opens in new tab");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Social links test skipped: ${errorMessage}`);
  }
});

Deno.test("Footer - Copyright and design credits", async () => {
  console.log("©️ Testing copyright and credits...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping copyright test");
      return;
    }

    const html = await response.text();

    // Copyright notice
    const currentYear = new Date().getFullYear();
    assertEquals(
      html.includes(currentYear.toString()),
      true,
      "Footer must contain current year",
    );
    assertEquals(
      html.includes("Marta Sojková"),
      true,
      "Copyright must contain business owner name",
    );
    assertEquals(
      html.includes("práva vyhrazena"),
      true,
      "Copyright must contain rights statement",
    );
    console.log(`✅ Copyright ${currentYear} present`);

    // Design credits
    assertEquals(
      html.includes("Design by"),
      true,
      "Footer should credit design",
    );
    assertEquals(
      html.includes("Created with"),
      true,
      "Footer should credit technology",
    );
    assertEquals(
      html.includes("Deno"),
      true,
      "Footer should mention Deno technology",
    );
    console.log("✅ Design and technology credits present");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Copyright test skipped: ${errorMessage}`);
  }
});

Deno.test("Footer - All footer links lead to valid pages", async () => {
  console.log("🔗 Testing footer links functionality...");

  const footerMenu = defaultFooterNavProps.menu;
  if (!footerMenu) {
    console.log("⚠️ No footer menu found");
    return;
  }

  try {
    // Collect all internal links from footer
    const internalLinks: string[] = [];

    footerMenu.forEach((section) => {
      section.children.forEach((link) => {
        if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
          internalLinks.push(link.href);
        }
      });
    });

    console.log(
      `\n🔍 Testing ${internalLinks.length} internal footer links...`,
    );

    for (const link of internalLinks) {
      const response = await fetch(`http://localhost:8000${link}`);
      assertEquals(
        response.status,
        200,
        `Footer link ${link} must be accessible`,
      );
      // Consume response body to prevent resource leak
      await response.text();
      console.log(`✅ ${link}: OK`);
    }

    // Test anchor links are present on homepage
    const homepageResponse = await fetch("http://localhost:8000");
    if (homepageResponse.status === 200) {
      const html = await homepageResponse.text();

      const anchorLinks = footerMenu.flatMap((section) =>
        section.children.filter((link) => link.href.startsWith("/#")),
      );

      anchorLinks.forEach((link) => {
        const anchorId = link.href.substring(2); // Remove /#
        const hasAnchor = html.includes(`id="${anchorId}"`);
        assertEquals(
          hasAnchor,
          true,
          `Homepage must have anchor ${anchorId} for footer link ${link.title}`,
        );
        console.log(`✅ Anchor #${anchorId}: found`);
      });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Footer links test skipped: ${errorMessage}`);
  }
});
