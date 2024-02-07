import { PageProps } from "$fresh/server.ts";
import Hero from "@@/hero/hero.tsx";
import Footer from "@@/footer/footer.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import Artekoucink, { ArtekoucinkProps } from "@@/artekoucing/artekoucink.tsx";
import Services, { ServicesProps } from "@@/services/services.tsx";
import Faq, { FaqProps, FaqType } from "@@/faq/faq.tsx";
import Testimonials, {
  TestimonialProps,
  TestimonialType,
} from "@@/testimonials/testimonials.tsx";
import AboutMe from "@@/about-me/about-me.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";

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

export const personalTopics: string[] = [
  "Jsem pořád v práci, nemám čas na rodinu a koníčky. Jak to vybalancovat?",
  "Končí mi rodičovská dovolená a nevím, kam se mám vrtnout.",
  "S partnerem nám vázne komunikace, přijde mi, že každý mluvíme jiným jazykem.",
  "Necítím se dobře v novém kolektivu v práci.",
  "Mám dvě nové pracovní nabídky a nevím, kterou vzít.",
  "Když se mám potkat s tchýní, svírá se mi žaludek.",
  "Nedaří se mi dotahovat rozdělané věci.",
  "Chci začít podnikat, ale nevím v čem.",
  "Chci udělat něco se svou životosprávou, ale nevím kde začít.",
];

export const teamTopics: string[] = [
  "Čeká nás nový projekt a nevíme, jak s ním naložit.",
  "Lidi spolu moc nemluví, informace se ztrácí a nedoputují tam, kam by měly.",
  "Budeme nabírat nového člověka a potřebujeme ho začlenit.",
  "Podřízení ztrácí motivaci k práci.",
  "Potřebujeme vymezit a vyjasnit role a kompetence.",
  "Rádi bychom efektivně využili našich silných stránek.",
  "Neumíme řešit konflikty, vždy se pohádáme jako psi.",
  "Potřebujeme zrevidovat naši vizi a misi.",
  "Každý si hrabe na svém písečku, jsme my vlastně vůbec tým?",
];

export const faqs: FaqType[] = [
  {
    question: "Pro koho je artekoučink vhodný a pro koho ne?",
    answer:
      "Artekoučink je vhodný pro všechny, kteří jsou ochotni vzít zodpovědnost za svůj život do svých rukou a vykročit směrem k cíli. Koučovací přístup není vhodný pro jedince, kteří mají tendence svádět své neúspěchy na své okolí (partner, rodina, šéf, vláda, …). Pokud není jeho cílem tento postoj změnit 🙂. Z praktického hlediska může být problematická návštěva imobilního klienta (schody).",
    column: 0,
  },
  {
    question: "Musím malovat? Bojím se toho, není to můj šálek…",
    answer:
      "Možnosti využití výtvarných technik jsou zcela na dobrovolné bázi. Výtvarné vyjádření slouží jako prostředek komunikace, zaznamenání pocitů a rozhodně nejsou předmětem hodnocení či analyzování koučem. Pokud má klient ostych, můžeme využít jednodušších technik (koláží) či se k barvám vůbec nepřiblížit a vést standardní koučovací rozhovor v křesílkách 🙂.  ",
    column: 1,
  },
  {
    question: "Proč bych do toho měl jít já sám (můj tým) zrovna v ateliéru?",
    answer:
      "Prostředí ateliéru je neotřelé, inspirativní a představuje neutrální půdu pro všechny zúčastněné. Metody a techniky zde využívané nelze přenést do jiných prostor (nikdo se při práci s barvami příliš neuvolní v zasedačce s kobercem).",
    column: 0,
  },
  {
    question: "Jak často je třeba docházet?",
    answer:
      "Záleží na vůli klienta, jeho cílech a potřebách. Jednorázová setkání jsou vhodná pro práci na konkrétním cíli malého rozsahu (např. si klient potřebuje ujasnit pracovní priority na následující kvartál), témata týkající se zvyšování sebevědomí jsou prací na několik měsíců. Frekvence setkání se odvíjí od naléhavosti a schopnosti klienta stanovené kroky uvádět do praxe, průměrně můžeme mluvit o měsíčním intervalu.",
    column: 1,
  },
  {
    question: "Proč bych si měl jako kouče vybrat zrovna Martu?",
    answer:
      "Marta má pro výkon profese kouče odpovídající vzdělání akreditované ICF (International Coach Federation), hlásí se k jejímu etickému kodexu a dále se v oboru vzdělává u renomovaných škol. Nebojí se zeptat na otázku, kterou si klient třeba obává položit a postará se o to, aby klient ze sezení odcházel s konkrétním, reálným úkolem, který klienta přiblíží ke stanovenému cíli. Viz reference.",
    column: 0,
  },
];

export const testimonials: TestimonialType[] = [
  {
    text:
      "Děkuji za týmový, pracovní koučink pro naší skupinu pracovníků soukromé školičky. Koučink pod vedením Marty Sojkové předčil naše očekávání. Svým skvělým přístupem vedení týmu, ale zároveň svýma přesně mířenýma otázkama, dokázala kolektiv při společné práci nejen sjednotit, ale zároveň při tom také vhodně a profesionálně  zjistit a probírat bolavá místa týmu a tím zcela přirozeně nastartovat proces pozitivních změn. Jistě přijdeme znova, Vochomůrky.",
    name: "Za Vochomůrky Lucie Klusoňová",
    role: "CEO Vochomůrky z.s.",
    avatar: "logo-vochomurky",
    column: 0,
  },
  {
    text:
      "U Marti jsem byla na koučovací hodině. Ze začátku se mi nezdálo moc pravděpodobné, že by mi to jakkoliv mohl pomoci. S Marti se známe, je moc milá fajn ženská, tak jsem ani nebyla nervózní, ale jak mi může pomoci? Na konci hodiny jsem brečela jak želva, protože účelem její služby není mi říct, jak to mám udělat, ale přijít si na to sama, což se pod jejím vedením podařilo! Bylo to neuvěřitelné, děkuji ti za to. Vřele tě všem doporučuji.",
    name: "Petra Jozífová",
    role: "make-up artist",
    avatar: "petra-jozifova",
    column: 0,
  },
  {
    text:
      "Schůzka u Marti mi dala super pohled z druhé strany problému. Dokázala jsem se vžít do role druhého člověka a více vnímat jeho potřeby a že všechno není jen jednostranné. Cítila jsem se dobře, s Marti se známe delší dobu a neměla jsem problém otevřeně popsat, co potřebuji vyřešit. Jsem ráda že mě Marta dokázala držet u tématu, protože to co potřebuje řešit a zpracovávat, mě často odvádí od důležitých bodů a Marti byla v tomhle naprosto profesionální.",
    name: "Bc. Monika Harantová",
    role: "Sales director",
    avatar: "monika-harantova",
    column: 1,
  },
  {
    text:
      "Marty empatický a přesto zcela profesionální přístup mě rozmluvil víc, než bych si dokázala připustit. Dokonalé vedení a jasná struktura byly tou správnou cestou k podstatě problému. Pomáhá utřídit si myšlenky a převádí na cesty, které by člověk jen tak nenašel.",
    name: "Bc. Jana Homolová",
    role: "hypoteční specialistka",
    avatar: "jana-homolova",
    column: 1,
  },
  {
    text:
      "Známe to všichni, chceme se v něčem zdokonalit, ale práce a rodina nám zabírají tolik času, že představa chodit někam na kroužek je nemyslitelná, natož pak dělat doma ještě nějaké domácí úkoly. Když ale já se sama nedonutím udělat si nějaký plán, natož ho ještě striktně dodržovat. Jen z té představy, že zase něco musím, je mi špatně. Pokud to máte stejně jako já, jděte na koučink k Martě. Možná to zní trochu jako nábor do sekty, ale nebojte se, společně s ní najdete svoji vnitřní motivací, pomůže vám najít cestu a určitý směr k vysněnému cíli, ať už je jakýkoliv. Jako bonus vás nabije pozitivní energií, která z ní pokaždé vyzařuje. Nemůžete nic ztratit, pouze získat. Za mě vřele doporučuji.",
    name: "Ing. Monika Ulčová",
    role: "pedagog",
    avatar: "monika-ulcova",
    column: 2,
  },
  {
    text:
      "Marta mi pomohla jako osobní kouč. Ukázala mi, že všechny odpovědi už mám v sobě. Navedla mě na jiný úhel pohledu na určitý problém.",
    name: "Zuzana Dolejšová",
    role: "recepční",
    avatar: "zuzana-dolejsova",
    column: 2,
  },
];

export default function Home(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  const artekoucinkProps: ArtekoucinkProps = {
    personalTopics: personalTopics,
    teamTopics: teamTopics,
  };
  const serviceProps: ServicesProps = { services: [] };
  const faqProps: FaqProps = {
    faqs: faqs,
    column: 2,
  };
  const testimonialProps: TestimonialProps = {
    testimonials: testimonials,
    column: 3,
  };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <Hero {...props} />
        <Artekoucink {...artekoucinkProps} />
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
