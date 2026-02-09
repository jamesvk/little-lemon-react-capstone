export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Logo placeholder */}
                <section className="footer-brand">
                    <img src="" alt="Company logo coming soon" />
                </section>

                {/* Navigation */}
                <nav aria-label="Footer navigation">
                    <ul className="footer-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>

                <section className="footer-contact" aria-label="Contact">
                    {/* Contact */}
                    <h3>Contact</h3>
                    <address>
                        <p>123 Cuisine Avenue</p>
                        <p>Chicago, IL 60607</p>
                        <p>littlelemon@email.com</p>
                    </address>
                </section>

                {/* Social */}
                <section className="footer-social" aria-label="Social links">
                    <h3>Follow Us</h3>
                    <ul className="footer-socials">
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">GOOGLE</a></li>
                        <li><a href="#">YELP</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}