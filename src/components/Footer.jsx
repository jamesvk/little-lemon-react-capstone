export default function Footer() {
    return (
        <footer>
            {/* Logo placeholder */}
            <section>
                <img src="" alt="Company logo coming soon" />
            </section>

            {/* Navigation */}
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>

            {/* Contact */}
            <address>
                <h3>Contact</h3>
                <p>Address TBD</p>
                <p>Address TBD</p>
                <p>Phone TBD</p>
                <p>Email TBD</p>
            </address>

            {/* Social */}
            <section>
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">INSTAGRAM</a></li>
                    <li><a href="#">FACEBOOK</a></li>
                    <li><a href="#">GOOGLE</a></li>
                    <li><a href="#">YELP</a></li>
                </ul>
            </section>
        </footer>
    )
}