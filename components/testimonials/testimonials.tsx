import TestimonialColumn from "_/testimonials/testimonial-column.tsx";

export type TestimonialType = {
  text: string;
  name: string;
  role: string;
  avatar: string;
  column?: number;
};

export type TestimonialProps = {
  testimonials: TestimonialType[];
  column: number;
};

export const defautlTestimonials: TestimonialType[] = [
  {
    text: "Děkuji za týmový, pracovní koučink pro naší skupinu pracovníků soukromé školičky. Koučink pod vedením Marty Sojkové předčil naše očekávání. Svým skvělým přístupem vedení týmu, ale zároveň svýma přesně mířenýma otázkama, dokázala kolektiv při společné práci nejen sjednotit, ale zároveň při tom také vhodně a profesionálně  zjistit a probírat bolavá místa týmu a tím zcela přirozeně nastartovat proces pozitivních změn. Jistě přijdeme znova, Vochomůrky.",
    name: "Za Vochomůrky Lucie Klusoňová",
    role: "CEO Vochomůrky z.s.",
    avatar: "logo-vochomurky",
    column: 0,
  },
  {
    text: "U Marti jsem byla na koučovací hodině. Ze začátku se mi nezdálo moc pravděpodobné, že by mi to jakkoliv mohl pomoci. S Marti se známe, je moc milá fajn ženská, tak jsem ani nebyla nervózní, ale jak mi může pomoci? Na konci hodiny jsem brečela jak želva, protože účelem její služby není mi říct, jak to mám udělat, ale přijít si na to sama, což se pod jejím vedením podařilo! Bylo to neuvěřitelné, děkuji ti za to. Vřele tě všem doporučuji.",
    name: "Petra Jozífová",
    role: "make-up artist",
    avatar: "petra-jozifova",
    column: 0,
  },
  {
    text: "Schůzka u Marti mi dala super pohled z druhé strany problému. Dokázala jsem se vžít do role druhého člověka a více vnímat jeho potřeby a že všechno není jen jednostranné. Cítila jsem se dobře, s Marti se známe delší dobu a neměla jsem problém otevřeně popsat, co potřebuji vyřešit. Jsem ráda že mě Marta dokázala držet u tématu, protože to co potřebuje řešit a zpracovávat, mě často odvádí od důležitých bodů a Marti byla v tomhle naprosto profesionální.",
    name: "Bc. Monika Harantová",
    role: "Sales director",
    avatar: "monika-harantova",
    column: 1,
  },
  {
    text: "Marty empatický a přesto zcela profesionální přístup mě rozmluvil víc, než bych si dokázala připustit. Dokonalé vedení a jasná struktura byly tou správnou cestou k podstatě problému. Pomáhá utřídit si myšlenky a převádí na cesty, které by člověk jen tak nenašel.",
    name: "Bc. Jana Homolová",
    role: "hypoteční specialistka",
    avatar: "jana-homolova",
    column: 1,
  },
  {
    text: "Marta mi pomohla jako osobní kouč. Ukázala mi, že všechny odpovědi už mám v sobě. Navedla mě na jiný úhel pohledu na určitý problém.",
    name: "Zuzana Dolejšová",
    role: "recepční",
    avatar: "zuzana-dolejsova",
    column: 1,
  },
  {
    text: "Koučing s Martou? Dlouho jsem si říkala - kéž by mi řekla, co si o tom myslí. Ona mi to neřekla. Ale dovedla mě k tomu, co si o tom myslím já. Nakonec jsem měla pocit, že každý problém má řešení a to řešení Marta pomůže najít ve vás samotných. A možná si i zalítáte…",
    name: "Bc. Lenka Trunečková",
    role: "CEO Uzlík, z.s.",
    avatar: "lenka-truneckova",
    column: 2,
  },
  {
    text: "Známe to všichni, chceme se v něčem zdokonalit, ale práce a rodina nám zabírají tolik času, že představa chodit někam na kroužek je nemyslitelná, natož pak dělat doma ještě nějaké domácí úkoly. Když ale já se sama nedonutím udělat si nějaký plán, natož ho ještě striktně dodržovat. Jen z té představy, že zase něco musím, je mi špatně. Pokud to máte stejně jako já, jděte na koučink k Martě. Možná to zní trochu jako nábor do sekty, ale nebojte se, společně s ní najdete svoji vnitřní motivací, pomůže vám najít cestu a určitý směr k vysněnému cíli, ať už je jakýkoliv. Jako bonus vás nabije pozitivní energií, která z ní pokaždé vyzařuje. Nemůžete nic ztratit, pouze získat. Za mě vřele doporučuji.",
    name: "Ing. Monika Ulčová",
    role: "pedagog",
    avatar: "monika-ulcova",
    column: 2,
  },
];

export const defaultTestimonialProps: TestimonialProps = {
  testimonials: defautlTestimonials,
  column: 3,
};

export default function Testimonials(props: TestimonialProps) {
  return (
    <section class="section-testimonials" id="reference">
      <div class="container">
        <h2 class="heading-2">Reference</h2>
        <div class="testimonials">
          {Array.from({ length: props.column }).map((_item, index) => (
            <TestimonialColumn {...props} column={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
