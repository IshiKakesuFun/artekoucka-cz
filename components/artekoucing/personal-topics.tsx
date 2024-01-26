import { IoPersonOutline } from "@io5";
import { ArtekoucinkProps } from "@@/artekoucing/artekoucink.tsx";

export default function PersonalTopics(props: ArtekoucinkProps) {
  return (
    <ul class="list">
      {props.personalTopics.map((item) => (
        <li class="list-item">
          <IoPersonOutline class="list-icon"></IoPersonOutline>
          <span>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
