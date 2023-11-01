import { useSignal } from "@preact/signals";
import { HeaderProps } from "/components/header.tsx";

export default function MobileHeader(props: Omit<HeaderProps, "sticky">) {
  const checked = useSignal(false);
  return (
    <div
      class={`relative block text-lg font-bold text-gray-700 dark:text-gray-200 sm:hidden`}
    >
    </div>
  );
}
