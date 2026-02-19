import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import Testimonials from "../sections/Testimonials";
import AboutSection from "../sections/AboutSection";

export default function HomePage() {
    return (
        <section aria-label="Homepage content">
            <Hero />
            <Highlights />
            <Testimonials />
            <AboutSection />
        </section>
    )
}
