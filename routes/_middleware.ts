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
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=cs")
      ? "cs"
      : "en";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("cs")) {
    ctx.state.lang = "cs";
  } else {
    ctx.state.lang = "en";
  }
  ctx.state.t = ctx.state.lang === "cs" ? cs : en;
  const res = await ctx.next();
  setLangCookie && res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
  return res;
}
