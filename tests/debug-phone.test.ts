// tests/debug-phone.test.ts
/**
 * Debug test pro zjištění přesného formátu telefonního čísla
 */

Deno.test("Debug - Find phone number format in HTML", async () => {
  try {
    const response = await fetch("http://localhost:8000");
    if (response.status !== 200) {
      console.log("⚠️ Server not running");
      return;
    }

    const html = await response.text();

    // Hledejme různé varianty telefonu
    console.log("🔍 Searching for phone number variants...");

    const phonePatterns = [
      /\+420[\s\u00A0]*602[\s\u00A0]*181[\s\u00A0]*097/g,
      /602[\s\u00A0]*181[\s\u00A0]*097/g,
      /\+420[\s\-\.]*602[\s\-\.]*181[\s\-\.]*097/g,
      /tel:[\+]*420[^"]+/g,
    ];

    phonePatterns.forEach((pattern, index) => {
      const matches = html.match(pattern);
      if (matches) {
        console.log(`Pattern ${index}: Found ${matches}`);
      }
    });

    // Najděme sekci s kontaktními údaji
    const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
    if (footerMatch) {
      const footerContent = footerMatch[0];
      console.log("\n📞 Footer content containing phone-like numbers:");
      const phoneNumbers = footerContent.match(
        /\d{3}[\s\u00A0\-\.]*\d{3}[\s\u00A0\-\.]*\d{3}/g,
      );
      if (phoneNumbers) {
        phoneNumbers.forEach((phone) => console.log(`  - ${phone}`));
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`⚠️ Debug test failed: ${errorMessage}`);
  }
});
