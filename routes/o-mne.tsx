import { PageProps } from "$fresh/server.ts";
import Footer from "@@/footer/footer.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";
import HeroAboutMe from "@@/hero/hero-about-me.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "/#artekoucink" },
  { title: "Služby", href: "/#nabidka-sluzeb" },
  { title: "Časté dotazy", href: "/#caste-dotazy" },
  { title: "Reference", href: "/#reference" },
  { title: "O mně", href: "/o-mne" },
  {
    title: "Konzultace zdarma",
    href: "#konzultace-zdarma",
    isCallToAction: true,
  },
];

export default function AboutMe(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <HeroAboutMe {...props} />
        <CallToAction {...props} />
      </main>
      <Footer {...props} />
    </>
  );
}
