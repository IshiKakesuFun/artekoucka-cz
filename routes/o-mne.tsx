import { PageProps } from "$fresh/server.ts";
import Footer from "_/footer/footer.tsx";
import { defaulFooterNavProps } from "_/footer/footer-nav.tsx";
import Header, { HeaderProps } from "_/header/header.tsx";
import { MenuLinkType } from "_/header/navigation.tsx";
// import CallToAction from "_/cta/call-to-action.tsx";
import HeroAboutMe from "_/hero/hero-about-me.tsx";
import AboutMe from "_/about-me/about-me.tsx";
import Competence from "_/about-me/competence.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "/#artekoucink" },
  { title: "Služby", href: "/#nabidka-sluzeb" },
  { title: "Časté dotazy", href: "/#caste-dotazy" },
  { title: "Reference", href: "/#reference" },
  { title: "O mně", href: "/o-mne" },
  {
    title: "Konzultace zdarma",
    href: "https://calendly.com/artekoucka/uvodni-konzultace",
    target: "_blank",
    isCallToAction: true,
  },
];

export default function AboutMePage(_props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <HeroAboutMe />
        <AboutMe />
        <Competence />
      </main>
      <Footer {...defaulFooterNavProps} />
    </>
  );
}
