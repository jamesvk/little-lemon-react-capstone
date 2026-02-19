import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-heading">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family-owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>

                        <Link to="/reservations" className="hero-btn-primary">
                            Reserve a Table
                        </Link>
                    </div>
                    <img src="/Images/serve_lg.jpg" alt="Restaurant Food"></img>
                </div>
            </div>
        </section>
    )
}