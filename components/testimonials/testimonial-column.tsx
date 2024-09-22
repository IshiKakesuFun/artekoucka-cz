import { TestimonialProps } from "_/testimonials/testimonials.tsx";
import Testimonial from "_/testimonials/testimonial.tsx";

export default function TestimonialColumn(props: TestimonialProps) {
  return (
    <div class="testimonial-column">
      {props.testimonials
        ?.filter((f) => f.column == props.column)
        .map((item) => <Testimonial {...item} />)}
    </div>
  );
}
