import { LayoutProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import Footer from "/components/footer/footer.tsx";
import { State } from "/routes/_middleware.ts";
import { T } from "/state.ts";

export default function Layout(props: LayoutProps<null, State>) {
  T.value = props.state.t;
  return (
    <html lang={props.state.lang}>
      <head>
        <title>{props.state.t.title}</title>
        <meta name="description" value={props.state.t.meta.description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={asset("style.css")} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      
      <props.Component />
      <Footer />
    </html>
  );
}
