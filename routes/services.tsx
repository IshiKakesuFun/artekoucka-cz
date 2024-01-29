import { PageProps } from "$fresh/server.ts";
import Footer from "@@/footer/footer.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";
import HeroServices from "@@/hero/hero-services.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "#artekoucink" },
  { title: "Služby", href: "/services", isCurrent: true },
  { title: "Časté dotazy", href: "/#faq" },
  { title: "Reference", href: "/#testimonials" },
  { title: "O mně", href: "/about-me" },
  { title: "Konzultace zdarma", href: "#cta", isCallToAction: true },
];

export default function Artekoucink(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <HeroServices {...props} />
        <CallToAction {...props} />
      </main>
      <Footer {...props} />
    </>
  );
}
