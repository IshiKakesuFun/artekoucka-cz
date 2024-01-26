import { FaqProps } from "@@/faq/faq.tsx";
import FaqItem from "@@/faq/faq-item.tsx";

export default function FaqColumn(props: FaqProps) {
  return (
    <div class="faq-column">
      {props.faqs?.filter((f) => f.column == props.column)
        .map((item, index) => <FaqItem {...item} index={index} />)}
    </div>
  );
}
