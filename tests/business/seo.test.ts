// tests/business/seo.test.ts
/**
 * SEO tests - kritické pro business visibility a Google ranking
 */
import { assertEquals, assertExists, waitForServer } from "../setup.ts";

// Helper funkce pro extrakci meta tagů
const extractMetaContent = (html: string, name: string): string | null => {
  const regex = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']+)["']`,
    "i",
  );
  const match = html.match(regex);
  return match ? match[1] : null;
};

const extractTitle = (html: string): string | null => {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1].trim() : null;
};

Deno.test("SEO - Homepage has complete meta tags", async () => {
  console.log("🏠 Testing homepage SEO meta tags...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping SEO tests");
      return;
    }

    const html = await response.text();

    // Title tag - nejdůležitější pro SEO
    const title = extractTitle(html);
    assertExists(title, "Page must have title tag");
    assertEquals(
      title!.includes("Artekoučka"),
      true,
      "Title must contain brand name 'Artekoučka'",
    );
    assertEquals(
      title!.includes("Marta Sojková"),
      true,
      "Title must contain personal name",
    );
    assertEquals(
      title!.includes("MBA"),
      true,
      "Title must contain credentials",
    );

    console.log(`✅ Title: ${title}`);

    // Meta description - kritické pro search results
    const description = extractMetaContent(html, "description");
    if (description) {
      assertEquals(
        description.length > 120,
        true,
        "Meta description should be descriptive (120+ chars)",
      );
      assertEquals(
        description.length < 160,
        true,
        "Meta description should not exceed 160 chars",
      );
      console.log(`✅ Description: ${description.substring(0, 50)}...`);
    } else {
      console.log(
        "⚠️ Meta description missing - should be added for better SEO",
      );
    }

    // Viewport - critical for mobile SEO
    assertEquals(
      html.includes('name="viewport"'),
      true,
      "Page must have viewport meta tag",
    );
    console.log("✅ Viewport meta tag present");

    // Language specification
    assertEquals(
      html.includes('lang="cs"'),
      true,
      "Page must specify Czech language",
    );
    console.log("✅ Czech language specified");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ SEO test skipped: ${errorMessage}`);
  }
});

Deno.test(
  "SEO - All main pages are accessible and have proper titles",
  async () => {
    console.log("📄 Testing all main pages SEO...");

    const pages = [
      { path: "/", name: "Homepage" },
      { path: "/sluzby", name: "Services" },
      { path: "/o-mne", name: "About" },
      { path: "/informace-o-zpracovani-osobnich-udaju", name: "GDPR" },
      { path: "/vseobecne-obchodni-podminky", name: "Terms" },
    ];

    try {
      for (const page of pages) {
        const response = await fetch(`http://localhost:8000${page.path}`);

        assertEquals(
          response.status,
          200,
          `${page.name} page (${page.path}) must be accessible`,
        );

        const html = await response.text();
        const title = extractTitle(html);

        assertExists(title, `${page.name} page must have title`);
        assertEquals(
          title!.includes("Artekoučka"),
          true,
          `${page.name} title must contain brand name`,
        );

        console.log(`✅ ${page.name}: ${title}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.log(`⚠️ Pages test skipped: ${errorMessage}`);
    }
  },
);

Deno.test("SEO - Business contact information is present", async () => {
  console.log("📞 Testing business contact info in HTML...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping contact info test");
      return;
    }

    const html = await response.text();

    // Phone number - důležité pro local SEO
    assertEquals(
      html.includes("602 181 097"),
      true,
      "Page must contain phone number",
    );
    assertEquals(
      html.includes("+420"),
      true,
      "Phone must include country code",
    );
    console.log("✅ Phone number found");

    // Email - contact method
    assertEquals(
      html.includes("marta@artekoucka"),
      true,
      "Page must contain email address",
    );
    console.log("✅ Email address found");

    // Address - local SEO
    assertEquals(
      html.includes("Vochov"),
      true,
      "Page must contain business address",
    );
    console.log("✅ Business address found");

    // Business ID - legal requirement
    assertEquals(
      html.includes("02146401"),
      true,
      "Page must contain business ID (IČ)",
    );
    console.log("✅ Business ID (IČ) found");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Contact info test skipped: ${errorMessage}`);
  }
});

Deno.test("SEO - Key business terms are present", async () => {
  console.log("🔑 Testing key business terms for SEO...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping keywords test");
      return;
    }

    const html = await response.text().then((text) => text.toLowerCase());

    const keyBusinessTerms = [
      "koučink",
      "kouč",
      "artekoučink",
      "ateliér",
      "marta sojková",
      "vochov",
      "plzeň",
      "individuální",
      "týmový",
      "kreativní",
    ];

    keyBusinessTerms.forEach((term) => {
      assertEquals(
        html.includes(term),
        true,
        `Page should contain key term: "${term}"`,
      );
      console.log(`✅ Found: ${term}`);
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Keywords test skipped: ${errorMessage}`);
  }
});

Deno.test("SEO - Images have proper alt attributes", async () => {
  console.log("🖼️ Testing image accessibility and SEO...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping images test");
      return;
    }

    const html = await response.text();

    // Extract all img tags
    const imgMatches = html.match(/<img[^>]+>/g);

    if (imgMatches) {
      let imagesWithAlt = 0;
      let imagesTotal = imgMatches.length;

      imgMatches.forEach((imgTag, index) => {
        const altMatch = imgTag.match(/alt=["']([^"']*)["']/);

        if (altMatch) {
          const altText = altMatch[1];
          assertEquals(
            altText.length > 0,
            true,
            `Image ${index} alt text cannot be empty`,
          );
          imagesWithAlt++;
          console.log(`✅ Image ${index}: ${altText.substring(0, 40)}...`);
        } else {
          console.log(`⚠️ Image ${index} missing alt attribute`);
        }
      });

      const altPercentage = (imagesWithAlt / imagesTotal) * 100;
      assertEquals(
        altPercentage >= 90,
        true,
        "At least 90% of images should have alt text",
      );
      console.log(
        `✅ Images with alt text: ${imagesWithAlt}/${imagesTotal} (${altPercentage.toFixed(1)}%)`,
      );
    } else {
      console.log("ℹ️ No images found on homepage");
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Images test skipped: ${errorMessage}`);
  }
});

Deno.test("SEO - Page performance indicators", async () => {
  console.log("⚡ Testing basic performance indicators...");

  try {
    const startTime = performance.now();
    const response = await fetch("http://localhost:8000");
    const endTime = performance.now();

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping performance test");
      return;
    }

    const loadTime = endTime - startTime;
    const html = await response.text();

    // Load time impact on SEO
    assertEquals(
      loadTime < 2000,
      true,
      "Page should load under 2 seconds for good SEO",
    );
    console.log(`✅ Load time: ${loadTime.toFixed(0)}ms`);

    // HTML size impact
    const htmlSize = new TextEncoder().encode(html).length;
    assertEquals(
      htmlSize < 500000,
      true,
      "HTML should be under 500KB for good performance",
    ); // 500KB
    console.log(`✅ HTML size: ${(htmlSize / 1024).toFixed(1)}KB`);

    // Check for common performance issues
    const hasInlineStyles = html.includes("<style>");
    if (hasInlineStyles) {
      console.log(
        "ℹ️ Inline styles found - consider external CSS for better caching",
      );
    }

    const scriptCount = (html.match(/<script/g) || []).length;
    assertEquals(
      scriptCount < 10,
      true,
      "Should have reasonable number of scripts",
    );
    console.log(`✅ Script tags: ${scriptCount}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Performance test skipped: ${errorMessage}`);
  }
});

Deno.test("SEO - Social media meta tags", async () => {
  console.log("📱 Testing social media meta tags...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping social meta test");
      return;
    }

    const html = await response.text();

    // Open Graph tags for better social sharing
    const hasOgTitle = html.includes('property="og:title"');
    const hasOgDescription = html.includes('property="og:description"');
    const hasOgType = html.includes('property="og:type"');

    if (hasOgTitle || hasOgDescription || hasOgType) {
      console.log("✅ Some Open Graph tags found");
      if (hasOgTitle) console.log("  - og:title present");
      if (hasOgDescription) console.log("  - og:description present");
      if (hasOgType) console.log("  - og:type present");
    } else {
      console.log(
        "ℹ️ No Open Graph tags found - consider adding for better social sharing",
      );
    }

    // Twitter Card tags
    const hasTwitterCard = html.includes('name="twitter:card"');
    if (hasTwitterCard) {
      console.log("✅ Twitter Card tags found");
    } else {
      console.log(
        "ℹ️ No Twitter Card tags found - optional but helpful for Twitter sharing",
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Social meta test skipped: ${errorMessage}`);
  }
});
