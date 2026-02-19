import {Link} from "react-router-dom";
/* Use Link instead of <a> for internal navigation to prevent full page 
reloads (SPA routing); still style links in CSS by selecting "a". */

export default function Nav() {
    return (
        <nav className="nav" aria-label="Primary navigation">
            <ul className="nav-list">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/reservations">RESERVATIONS</Link></li>
                <li><Link to="/order">ORDER ONLINE</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
        </nav>
    )
}