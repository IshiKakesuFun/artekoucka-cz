import { PageProps } from "$fresh/server.ts";

export default function Layout(props: PageProps) {
  return (
    <>
      <props.Component />
    </>
  );
}
