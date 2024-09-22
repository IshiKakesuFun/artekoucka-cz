import { TestimonialType } from "_/testimonials/testimonials.tsx";

export default function Testimonial(item: TestimonialType) {
  return (
    <figure class="testimonial">
      <blockquote class="testimonial-text">{item.text}</blockquote>
      <div class="testimonial-box">
        <picture>
          <source
            srcset={"images/testimonial/" + item.avatar + ".webp"}
            type="image/webp"
          />
          <source
            srcset={"images/testimonial/" + item.avatar + "-512.webp"}
            type="image/webp"
          />
          <source
            srcset={"images/testimonial/" + item.avatar + "-192.webp"}
            type="image/webp"
          />
          <img
            class="testimonial-img"
            src={"images/testimonial/" + item.avatar + "-192.webp"}
            alt={"Na fotografii je " + item.name}
          />
        </picture>
        <p class="testimonial-name">
          {item.name},<br />
          <span>{item.role}</span>
        </p>
      </div>
    </figure>
  );
}
