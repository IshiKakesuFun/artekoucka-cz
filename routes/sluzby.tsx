import { PageProps } from "$fresh/server.ts";
import Footer from "_/footer/footer.tsx";
import { defaultFooterNavProps } from "_/footer/footer-nav.tsx";
import Header, { HeaderProps } from "_/header/header.tsx";
import { MenuLinkType } from "_/header/navigation.tsx";
// import CallToAction from "_/cta/call-to-action.tsx";
import HeroServices from "_/hero/hero-services.tsx";
import ServiceIndividual from "_/services/individual/service-individual.tsx";
import ServiceCustom from "_/services/custom/service-custom.tsx";
import ServiceTeam from "_/services/team/service-team.tsx";
import Atelier from "_/services/atelier.tsx";
import AboutMeCard from "_/about-me/about-me-card.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "#atelier" },
  { title: "Služby", href: "/sluzby" },
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

export default function Artekoucink(_props: PageProps<null>) {
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
        <AboutMeCard />
      </main>
      <Footer {...defaultFooterNavProps} />
    </>
  );
}
