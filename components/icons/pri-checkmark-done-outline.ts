import { GenIcon, type IconBaseProps } from "@icons";

export function PriCheckmarkDoneOutline(props: IconBaseProps) {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284",
        },
      },
    ],
  })(props);
}
