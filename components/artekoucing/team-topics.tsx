import { PriPeopleOutline } from "@icons";
import { ArtekoucinkProps } from "_/artekoucing/artekoucink.tsx";

export const defaultTeamTopics: string[] = [
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

export default function TeamTopics(props: ArtekoucinkProps) {
  return (
    <ul class="list">
      {props.teamTopics.map((item) => (
        <li class="list-item">
          <PriPeopleOutline class="list-icon"></PriPeopleOutline>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
