import { FaqType } from "_/faq/faq.tsx";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "@io5";

export default function FaqItem(item: FaqType) {
  return (
    <div class="faq">
      <details class="faq-detail">
        <summary class="faq-summary">
          <IoAddCircleOutline class="faq-icon"></IoAddCircleOutline>
          <IoRemoveCircleOutline class="faq-icon-open"></IoRemoveCircleOutline>
          {item.question}
        </summary>
        <p class="faq-text">{item.answer}</p>
      </details>
    </div>
  );
}
