// tests/setup.ts
/**
 * Simple test setup pro artekoucka.cz business tests
 */

// Re-export Deno standard assertions
export { assertEquals, assertExists, assert } from "@std/assert";

// Test utilities
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidPath = (path: string): boolean => {
  return path.startsWith("/") || path.startsWith("#");
};

export const isKalendlyUrl = (url: string): boolean => {
  return url.includes("calendly.com") && url.includes("artekoucka");
};

// Wait helper for server to start
export const waitForServer = async (
  url: string,
  maxAttempts = 10,
): Promise<boolean> => {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.status === 200) return true;
    } catch {
      // Server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return false;
};
