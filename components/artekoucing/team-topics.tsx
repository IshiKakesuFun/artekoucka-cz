import { IoPeopleOutline } from "@io5";
import { ArtekoucinkProps } from "@@/artekoucing/artekoucink.tsx";

export default function TeamTopics(props: ArtekoucinkProps) {
  return (
    <ul class="list">
      {props.teamTopics.map((item) => (
        <li class="list-item">
          <IoPeopleOutline class="list-icon"></IoPeopleOutline>
          <span>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
