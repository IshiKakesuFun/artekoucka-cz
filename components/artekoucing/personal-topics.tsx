import { PriPersonOutline } from "@icons";
import { ArtekoucinkProps } from "@@/artekoucing/artekoucink.tsx";

export const defaulPersonalTopics: string[] = [
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

export default function PersonalTopics(props: ArtekoucinkProps) {
  return (
    <ul class="list">
      {props.personalTopics.map((item) => (
        <li class="list-item">
          <PriPersonOutline class="list-icon"></PriPersonOutline>
          <span>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
