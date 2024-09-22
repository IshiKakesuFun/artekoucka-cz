import { GenIcon, type IconBaseProps } from "@icons";

export function PriCheckmark(props: IconBaseProps) {
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
          d: "M416 128L192 384l-96-96",
        },
      },
    ],
  })(props);
}
