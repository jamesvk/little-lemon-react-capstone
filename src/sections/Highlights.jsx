import {Link} from "react-router-dom";
import Specials from "./Specials";

export default function Highlights() {
    return (
        <section className="highlights" aria-labelledby="highlights-heading">
            <div className="container">
                <div className="highlights-header">
                    <h2 id="highlights-heading">This week's specials!</h2>
                    <Link to="/menu">Online Menu</Link>
                </div>

                <div className="highlights-cards">
                    <Specials />
                </div>
            </div>
        </section>
    )
}