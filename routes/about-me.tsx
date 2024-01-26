import { PageProps } from "$fresh/server.ts";
import Hero from "@@/hero/hero.tsx";
import Footer from "@@/footer/footer.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "/#artekoucink" },
  { title: "Služby", href: "/services" },
  { title: "Časté dotazy", href: "/#faq" },
  { title: "Reference", href: "/#testimonials" },
  { title: "O mně", href: "/about-me", isCurrent: true },
  { title: "Konzultace zdarma", href: "#cta", isCallToAction: true },
];

export default function AboutMe(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <Hero {...props} />
        <CallToAction {...props} />
      </main>
      <Footer {...props} />
    </>
  );
}
