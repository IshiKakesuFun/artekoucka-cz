import { PriPersonOutline } from "@icons";
import { ArtekoucinkProps } from "@@/artekoucing/artekoucink.tsx";

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
