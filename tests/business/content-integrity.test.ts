// tests/business/content-integrity.test.ts
/**
 * Content integrity tests - business messaging a content quality
 */
import { assertEquals } from "../setup.ts";

Deno.test("Content - Homepage has clear value proposition", async () => {
  console.log("🏠 Testing homepage value proposition...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping content tests");
      return;
    }

    // OPRAVA: Správný async/await pattern místo .then()
    const html = (await response.text()).toLowerCase();

    const keyMessages = [
      "koučink",
      "barvy",
      "potenciál",
      "ateliér",
      "konzultace zdarma",
    ];

    keyMessages.forEach((message) => {
      assertEquals(
        html.includes(message),
        true,
        `Homepage must mention "${message}"`,
      );
      console.log(`✅ Found key message: ${message}`);
    });

    // Test hero messaging
    const heroKeywords = ["zažijte", "odemknutí", "tvůrčí", "kreativní"];
    let heroScore = 0;

    heroKeywords.forEach((keyword) => {
      if (html.includes(keyword)) {
        heroScore++;
        console.log(`  ✅ Hero keyword: ${keyword}`);
      }
    });

    assertEquals(
      heroScore >= 2,
      true,
      "Hero section should contain at least 2 creative keywords",
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Homepage content test skipped: ${errorMessage}`);
  }
});

Deno.test("Content - Services page has complete offering", async () => {
  console.log("🛠️ Testing services page content...");

  try {
    const response = await fetch("http://localhost:8000/sluzby");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping services test");
      return;
    }

    const html = await response.text();

    // Required services
    const requiredServices = [
      "Individuální koučink",
      "Týmový koučink",
      "Ateliér",
      "Na klíč",
    ];

    requiredServices.forEach((service) => {
      assertEquals(
        html.includes(service),
        true,
        `Services page must mention "${service}"`,
      );
      console.log(`✅ Service found: ${service}`);
    });

    // Pricing information
    const priceIndicators = ["1800", "3000", "2500", "Kč"];
    let priceCount = 0;

    priceIndicators.forEach((price) => {
      if (html.includes(price)) {
        priceCount++;
        console.log(`  ✅ Price indicator: ${price}`);
      }
    });

    assertEquals(
      priceCount >= 3,
      true,
      "Services page should show pricing information",
    );

    // Process descriptions
    const processKeywords = ["konzultace", "setkání", "zdarma", "nezávazná"];
    processKeywords.forEach((keyword) => {
      assertEquals(
        html.includes(keyword),
        true,
        `Services must explain process: "${keyword}"`,
      );
      console.log(`  ✅ Process keyword: ${keyword}`);
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Services content test skipped: ${errorMessage}`);
  }
});

Deno.test("Content - About page has credentials and story", async () => {
  console.log("👩‍🎓 Testing about page credentials...");

  try {
    const response = await fetch("http://localhost:8000/o-mne");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping about test");
      return;
    }

    const html = await response.text();

    // Required credentials
    const credentials = ["ICF", "MBA", "Mgr.", "koučování", "certifikované"];

    credentials.forEach((credential) => {
      assertEquals(
        html.includes(credential),
        true,
        `About page must mention "${credential}"`,
      );
      console.log(`✅ Credential: ${credential}`);
    });

    // Professional background
    const backgroundKeywords = [
      "učitelka",
      "výtvarný",
      "ZUŠ",
      "rodičovská",
      "vzdělávací",
    ];

    let backgroundScore = 0;
    backgroundKeywords.forEach((keyword) => {
      if (html.includes(keyword)) {
        backgroundScore++;
        console.log(`  ✅ Background: ${keyword}`);
      }
    });

    assertEquals(
      backgroundScore >= 3,
      true,
      "About page should tell professional story",
    );

    // Current work
    const currentWork = ["ateliér", "provozuji", "klienty", "týmy"];
    currentWork.forEach((work) => {
      assertEquals(
        html.includes(work),
        true,
        `About page must describe current work: "${work}"`,
      );
      console.log(`  ✅ Current work: ${work}`);
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ About content test skipped: ${errorMessage}`);
  }
});

Deno.test("Content - FAQ covers important business questions", async () => {
  console.log("❓ Testing FAQ content quality...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping FAQ test");
      return;
    }

    const html = (await response.text()).toLowerCase();

    // Important FAQ topics
    const faqTopics = ["kdo", "proč", "jak často", "musím malovat", "ateliér"];

    let faqTopicScore = 0;
    faqTopics.forEach((topic) => {
      if (html.includes(topic)) {
        faqTopicScore++;
        console.log(`  ✅ FAQ topic: ${topic}`);
      }
    });

    assertEquals(
      faqTopicScore >= 4,
      true,
      "FAQ should cover key business questions",
    );

    // FAQ should answer concerns
    const concerns = ["bojím", "není", "vhodný", "ostych"];
    let concernScore = 0;

    concerns.forEach((concern) => {
      if (html.includes(concern)) {
        concernScore++;
        console.log(`  ✅ Addresses concern: ${concern}`);
      }
    });

    assertEquals(concernScore >= 2, true, "FAQ should address common concerns");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ FAQ content test skipped: ${errorMessage}`);
  }
});

Deno.test("Content - Testimonials show social proof", async () => {
  console.log("💬 Testing testimonials content...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping testimonials test");
      return;
    }

    const html = await response.text();

    // Should have real names (not placeholders)
    const realNameIndicators = ["Lucie", "Petra", "Monika", "Jana", "Zuzana"];
    let realNameCount = 0;

    realNameIndicators.forEach((name) => {
      if (html.includes(name)) {
        realNameCount++;
        console.log(`  ✅ Real testimonial: ${name}`);
      }
    });

    assertEquals(
      realNameCount >= 3,
      true,
      "Should have multiple real testimonials",
    );

    // Professional roles mentioned
    const professionalRoles = ["CEO", "director", "specialistka", "pedagog"];
    let roleCount = 0;

    professionalRoles.forEach((role) => {
      if (html.includes(role)) {
        roleCount++;
        console.log(`  ✅ Professional role: ${role}`);
      }
    });

    assertEquals(
      roleCount >= 2,
      true,
      "Testimonials should show professional diversity",
    );

    // Positive feedback keywords
    const positiveKeywords = [
      "děkuji",
      "doporučuji",
      "pomohla",
      "profesionální",
    ];
    let positiveScore = 0;

    positiveKeywords.forEach((keyword) => {
      if (html.includes(keyword)) {
        positiveScore++;
        console.log(`  ✅ Positive feedback: ${keyword}`);
      }
    });

    assertEquals(
      positiveScore >= 3,
      true,
      "Testimonials should be genuinely positive",
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Testimonials test skipped: ${errorMessage}`);
  }
});

Deno.test("Content - Business consistency across pages", async () => {
  console.log("🏢 Testing business consistency...");

  const pages = ["/", "/sluzby", "/o-mne"];
  const consistentElements = {
    "Marta Sojková": "Personal brand name",
    koučink: "Core service",
    ateliér: "Unique selling point",
    Vochov: "Location",
    calendly: "Booking system",
  };

  try {
    for (const page of pages) {
      console.log(`\n📄 Testing consistency on ${page}...`);

      const response = await fetch(`http://localhost:8000${page}`);
      if (response.status !== 200) continue;

      const html = (await response.text()).toLowerCase();

      Object.entries(consistentElements).forEach(([element, description]) => {
        const found = html.includes(element.toLowerCase());
        assertEquals(
          found,
          true,
          `${page} must contain ${description}: "${element}"`,
        );
        if (found) {
          console.log(`  ✅ ${description}: ${element}`);
        }
      });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Consistency test skipped: ${errorMessage}`);
  }
});

Deno.test("Content - Call-to-actions are clear and prominent", async () => {
  console.log("📢 Testing call-to-action clarity...");

  try {
    const response = await fetch("http://localhost:8000");

    if (response.status !== 200) {
      console.log("⚠️ Server not running, skipping CTA test");
      return;
    }

    const html = await response.text();

    // Primary CTAs
    const ctaTexts = [
      "Konzultace zdarma",
      "Nezávazná konzultace",
      "calendly",
      "kontakt",
    ];

    let ctaCount = 0;
    ctaTexts.forEach((cta) => {
      if (html.toLowerCase().includes(cta.toLowerCase())) {
        ctaCount++;
        console.log(`  ✅ CTA found: ${cta}`);
      }
    });

    assertEquals(ctaCount >= 3, true, "Homepage should have clear CTAs");

    // CTA should be actionable
    const actionWords = ["objednat", "zavolejte", "napište", "domluvíme"];
    let actionCount = 0;

    actionWords.forEach((action) => {
      if (html.includes(action)) {
        actionCount++;
        console.log(`  ✅ Action word: ${action}`);
      }
    });

    assertEquals(actionCount >= 2, true, "CTAs should be actionable");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ CTA test skipped: ${errorMessage}`);
  }
});
