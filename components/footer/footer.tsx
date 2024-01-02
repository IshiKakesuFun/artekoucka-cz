import { PageProps } from "$fresh/server.ts";
import CopyRight from "@@/footer/copyright.tsx";
import Logo from "@@/footer/logo.tsx";

export default function Footer(props: PageProps) {
  return (
    <footer class="footer">
      <div class="container">
        <div class="logo-col">
          <Logo />
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}
