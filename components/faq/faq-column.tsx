import { FaqProps } from "_/faq/faq.tsx";
import FaqItem from "_/faq/faq-item.tsx";

export default function FaqColumn(props: FaqProps) {
  return (
    <div class="faq-column">
      {props.faqs
        ?.filter((f) => f.column == props.column)
        .map((item, index) => (
          <FaqItem
            key={`faq-${props.column}-${index}`}
            {...item}
            index={index}
          />
        ))}
    </div>
  );
}
