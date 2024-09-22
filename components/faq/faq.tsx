import FaqColumn from "_/faq/faq-column.tsx";

export type FaqType = {
  question: string;
  answer: string;
  column?: number;
  index?: number;
};

export type FaqProps = {
  faqs: FaqType[];
  column: number;
};

export const defaultFaqs: FaqType[] = [
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

export const defaultFaqProps: FaqProps = {
  faqs: defaultFaqs,
  column: 2,
};

export default function Faq(props: FaqProps) {
  return (
    <section class="section-faq" id="caste-dotazy">
      <div class="container">
        <h2 class="faq-heading">Časté dotazy</h2>
        <div class="faqs" id="accordionFaqs">
          {Array.from({ length: props.column }).map((_item, index) => (
            <FaqColumn {...props} column={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
