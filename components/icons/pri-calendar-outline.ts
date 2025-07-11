import { GenIcon, type IconBaseProps } from "@icons";

export function PriCalendarOutline(props: IconBaseProps) {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "rect",
        attr: {
          width: "416",
          height: "384",
          x: "48",
          y: "80",
          fill: "none",
          strokeLinejoin: "round",
          strokeWidth: "32",
          rx: "48",
        },
      },
      {
        tag: "circle",
        attr: { cx: "296", cy: "232", r: "24" },
        child: [],
      },
      { tag: "circle", attr: { cx: "376", cy: "232", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "296", cy: "312", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "376", cy: "312", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "136", cy: "312", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "216", cy: "312", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "136", cy: "392", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "216", cy: "392", r: "24" }, child: [] },
      { tag: "circle", attr: { cx: "296", cy: "392", r: "24" }, child: [] },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M128 48v32m256-32v32",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M464 160H48",
        },
        child: [],
      },
    ],
  })(props);
}
