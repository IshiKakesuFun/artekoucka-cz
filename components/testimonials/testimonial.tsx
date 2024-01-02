import { TestimonialType } from "@@/testimonials/testimonials.tsx";

export default function Testimonial(item: TestimonialType) {
  return (
    <figure class="testimonial">
      <blockquote class="testimonial-text">
        {item.text}
      </blockquote>
      <div class="testimonial-box">
        <img
          class="testimonial-img"
          src={"images/testimonial/" + item.avatar}
          alt={"Na fotografii je " + item.name}
        />
        <p class="testimonial-name">
          {item.name},<br />
          <span>
            {item.role}
          </span>
        </p>
      </div>
    </figure>
  );
}
