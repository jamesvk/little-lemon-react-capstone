export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Logo placeholder */}
                <section className="footer-brand">
                    <img className="header_logo" src="/Images/restaurant.jpg" alt="Logo"/>
                </section>

                {/* Navigation */}
                <nav className="footer-nav" aria-label="Footer navigation">
                    <ul className="footer-navs">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/menu">MENU</a></li>
                        <li><a href="/reservations">RESERVATIONS</a></li>
                        <li><a href="/order">ORDER ONLINE</a></li>
                        <li><a href="/login">LOGIN</a></li>
                    </ul>
                </nav>

                <section className="footer-contact" aria-label="Contact">
                    {/* Contact */}
                    <h3>CONTACT</h3>
                    <address>
                        <p>123 CUISINE AVE</p>
                        <p>CHICAGO, IL 60607</p>
                        <p>LL@GMAILSAMP.COM</p>
                    </address>
                </section>

                {/* Social */}
                <section className="footer-social" aria-label="Social links">
                    <h3>FOLLOW US</h3>
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