import { PriPeopleOutline } from "@icons";
import { ArtekoucinkProps } from "@@/artekoucing/artekoucink.tsx";

export default function TeamTopics(props: ArtekoucinkProps) {
  return (
    <ul class="list">
      {props.teamTopics.map((item) => (
        <li class="list-item">
          <PriPeopleOutline class="list-icon"></PriPeopleOutline>
          <span>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
