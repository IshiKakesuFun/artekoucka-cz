import { assertEquals, assertExists } from "@std/assert";
import { DOMParser } from "@deno-dom";
import { JSX } from "preact";

export { assertEquals, assertExists };

export function parseHTML(html: string) {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}

export async function renderComponent(
  component: () => JSX.Element,
): Promise<string> {
  const { renderToString } = await import("preact-render-to-string");
  return renderToString(component());
}
