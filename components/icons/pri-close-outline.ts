import { GenIcon, type IconBaseProps } from "@icons";

export function PriCloseOutline(props: IconBaseProps) {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [{
      tag: "path",
      attr: {
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "32",
        d: "M368 368L144 144m224 0L144 368",
      },
    }],
  })(props);
}
