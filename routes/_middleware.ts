import { MiddlewareHandlerContext } from "$fresh/server.ts";

import cs from "/i18n/cs.json" assert { type: "json" };
import en from "/i18n/en.json" assert { type: "json" };
import { Translation } from "/i18n/types.ts";

export type State = {
  lang: "cs" | "en";
  t: Translation;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  let setLangCookie = true;
  if (
    req.headers.has("cookie") &&
    req.headers.get("cookie")!.includes("lang")
  ) {
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=en")
      ? "en"
      : "cs";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("en")) {
    ctx.state.lang = "en";
  } else {
    ctx.state.lang = "cs";
  }
  ctx.state.t = ctx.state.lang === "en" ? en : cs;
  const res = await ctx.next();
  setLangCookie && res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
  return res;
}
