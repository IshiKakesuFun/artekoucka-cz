import { PageProps } from "$fresh/server.ts";
import Hero from "@@/hero/hero.tsx";
import Footer from "@@/footer/footer.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import Artekoucink from "@@/artekoucing/artekoucink.tsx";
import Services, { ServicesProps } from "@@/services/services.tsx";
import Faq, { FaqProps } from "@@/faq/faq.tsx";
import Testimonials, {
  TestimonialProps,
  TestimonialType,
} from "@@/testimonials/testimonials.tsx";
import AboutMe from "@@/about-me/about-me.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "#artekoucink" },
  { title: "Služby", href: "#services" },
  { title: "Časté dotazy", href: "#faq" },
  { title: "Reference", href: "#testimonials" },
  { title: "O mně", href: "#about-me" },
  { title: "Konzultace zdarma", href: "#cta", isCallToAction: true },
];

export const testimonials: TestimonialType[] = [
  {
    text:
      "Schůzka u Marti mi dala super pohled z druhé strany problému. Dokázala jsem se vžít do role druhého člověka a více vnímat jeho potřeby a že všechno není jen jednostranné. Cítila jsem se dobře, s Marti se známe delší dobu a neměla jsem problém otevřeně popsat, co potřebuji vyřešit. Jsem ráda že mě Marta dokázala držet u tématu, protože to co potřebuje řešit a zpracovávat, mě často odvádí od důležitých bodů a Marti byla v tomhle naprosto profesionální.",
    name: "Bc. Monika Harantová",
    role: "Sales director",
    avatar: "monika-harantova.jpeg",
  },

  {
    text:
      "U Marti jsem byla na koučovací hodině. Ze začátku se mi nezdálo moc pravděpodobné, že by mi to jakkoliv mohl pomoci. S Marti se známe, je moc milá fajn ženská, tak jsem ani nebyla nervózní, ale jak mi může pomoci? Na konci hodiny jsem brečela jak želva, protože účelem její služby není mi říct, jak to mám udělat, ale přijít si na to sama, což se pod jejím vedením podařilo! Bylo to neuvěřitelné, děkuji ti za to. Vřele tě všem doporučuji.",
    name: "Petra Jozífová",
    role: "make-up artist",
    avatar: "petra-jozifova.jpeg",
  },
  {
    text:
      "Známe to všichni, chceme se v něčem zdokonalit, ale práce a rodina nám zabírají tolik času, že představa chodit někam na kroužek je nemyslitelná, natož pak dělat doma ještě nějaké domácí úkoly. Když ale já se sama nedonutím udělat si nějaký plán, natož ho ještě striktně dodržovat. Jen z té představy, že zase něco musím, je mi špatně. Pokud to máte stejně jako já, jděte na koučink k Martě. Možná to zní trochu jako nábor do sekty, ale nebojte se, společně s ní najdete svoji vnitřní motivací, pomůže vám najít cestu a určitý směr k vysněnému cíli, ať už je jakýkoliv. Jako bonus vás nabije pozitivní energií, která z ní pokaždé vyzařuje. Nemůžete nic ztratit, pouze získat. Za mě vřele doporučuji.",
    name: "Ing. Monika Ulčová",
    role: "pedagog",
    avatar: "monika-ulcova.jpeg",
  },
  {
    text:
      "Marty empatický a přesto zcela profesionální přístup mě rozmluvil víc, než bych si dokázala připustit. Dokonalé vedení a jasná struktura byly tou správnou cestou k podstatě problému. Pomáhá utřídit si myšlenky a převádí na cesty, které by člověk jen tak nenašel.",
    name: "Bc. Jana Homolová",
    role: "hypoteční specialistka",
    avatar: "jana-homolova.jpeg",
  },
  {
    text:
      "Marta mi pomohla jako osobní kouč. Ukázala mi, že všechny odpovědi už mám v sobě. Navedla mě na jiný úhel pohledu na určitý problém.",
    name: "Zuzana Dolejšová",
    role: "recepční",
    avatar: "zuzana-dolejsova.jpeg",
  },
];

export default function Home(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  const serviceProps: ServicesProps = { services: [] };
  const faqProps: FaqProps = { faqs: [] };
  const testimonialProps: TestimonialProps = { testimonials: testimonials };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <Hero {...props} />
        <Artekoucink {...props} />
        <Services {...serviceProps} />
        <Faq {...faqProps} />
        <Testimonials {...testimonialProps} />
        <CallToAction {...props} />
        <AboutMe {...props} />
      </main>
      <Footer {...props} />
    </>
  );
}
