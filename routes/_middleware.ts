import { FreshContext } from "$fresh/server.ts";

export async function handler(_req: Request, ctx: FreshContext) {
  //   console.log(ctx.destination);
  //   console.log(req.url);
  const resp = await ctx.next();
  return resp;
}
