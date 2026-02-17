import {Link} from "react-router-dom";
import Specials from "./Specials";

export default function Highlights() {
    return (
        <section className="highlights">
            <div className="container">
                <div className="highlights-header">
                    <h1>This week's specials!</h1>
                    <Link to="/menu">Online Menu</Link>
                </div>

                <div className="highlights-cards">
                    <Specials />
                </div>
            </div>
        </section>
    )
}