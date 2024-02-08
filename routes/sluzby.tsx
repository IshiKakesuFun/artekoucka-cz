import { PageProps } from "$fresh/server.ts";
import Footer from "@@/footer/footer.tsx";
import { defaulFooterNavProps } from "@@/footer/footer-nav.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";
import HeroServices from "@@/hero/hero-services.tsx";
import ServiceIndividual from "@@/services/individual/service-individual.tsx";
import ServiceCustom from "@@/services/custom/service-custom.tsx";
import ServiceTeam from "@@/services/team/service-team.tsx";
import Atelier from "@@/services/atelier.tsx";
import AboutMe from "@@/about-me/about-me.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "#atelier" },
  { title: "Služby", href: "/sluzby" },
  { title: "Časté dotazy", href: "/#caste-dotazy" },
  { title: "Reference", href: "/#reference" },
  { title: "O mně", href: "/o-mne" },
  {
    title: "Konzultace zdarma",
    href: "#konzultace-zdarma",
    isCallToAction: true,
  },
];

export default function Artekoucink(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <HeroServices />
        <Atelier />
        <ServiceIndividual />
        <ServiceTeam />
        <ServiceCustom />
        <CallToAction {...props} />
        <AboutMe />
      </main>
      <Footer {...defaulFooterNavProps} />
    </>
  );
}
