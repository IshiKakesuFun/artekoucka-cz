import { PageProps } from "$fresh/server.ts";
import Hero from "_/hero/hero.tsx";
import Footer from "_/footer/footer.tsx";
import { defaultFooterNavProps } from "_/footer/footer-nav.tsx";
import Header, { HeaderProps } from "_/header/header.tsx";
import { MenuLinkType } from "_/header/navigation.tsx";
import Artekoucink, {
  defaultArtekoucinkProps,
} from "_/artekoucing/artekoucink.tsx";
import Services from "_/services/services.tsx";
import Faq, { defaultFaqProps } from "_/faq/faq.tsx";
import Testimonials, {
  defaultTestimonialProps,
} from "_/testimonials/testimonials.tsx";
import AboutMeCard from "_/about-me/about-me-card.tsx";
// import CallToAction from "_/cta/call-to-action.tsx";

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

export default function Home(_props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <Hero />
        <Artekoucink {...defaultArtekoucinkProps} />
        <Services />
        <Faq {...defaultFaqProps} />
        <Testimonials {...defaultTestimonialProps} />
        <AboutMeCard />
      </main>
      <Footer {...defaultFooterNavProps} />
    </>
  );
}
