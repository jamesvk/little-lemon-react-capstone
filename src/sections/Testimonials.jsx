import TestimonialCard from "../components/TestimonialCard";

export const testimonials = [
  {
    image: "/Images/Olivia.png",
    firstName: "Olivia",
    lastName: "Martinez",
    rating: "⭐⭐⭐⭐⭐",
    review: "Absolutely loved the food and the atmosphere was perfect."
  },
  {
    image: "/Images/Daniel.png",
    firstName: "Daniel",
    lastName: "Kim",
    rating: "⭐⭐⭐⭐⭐",
    review: "Service was top-notch and every dish was full of flavor."
  },
  {
    image: "/Images/Sophia.png",
    firstName: "Sophia",
    lastName: "Reynolds",
    rating: "⭐⭐⭐⭐⭐",
    review: "One of the best dining experiences I’ve had in years."
  },
  {
    image: "/Images/Marcus.png",
    firstName: "Marcus",
    lastName: "Johnson",
    rating: "⭐⭐⭐⭐⭐",
    review: "Fresh ingredients, great presentation, and fantastic staff."
  }
];

export default function Testimonials() {
    return (
        <section className="testimonial">
            <div className="container testimonial-container">
                <h1>Testimonials</h1>
                <div className="testimonials-container">
                    {testimonials.map(review => (
                    <TestimonialCard key={`${review.firstName}-${review.lastName}`} {...review} />
                    ))}
                </div>
            </div>
        </section>
    )
}