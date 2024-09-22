import { useSignal } from "@preact/signals";
import { HeaderProps } from "_/header/header.tsx";

export default function MobileHeader(props: Omit<HeaderProps, "sticky">) {
  const checked = useSignal(false);
  return <></>;
}
