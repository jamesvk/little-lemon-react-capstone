import {Link, NavLink} from "react-router-dom";
/* Use Link instead of <a> for internal navigation to prevent full page 
reloads (SPA routing); still style links in CSS by selecting "a". */

export default function Nav() {
    return (
        <nav className="nav" aria-label="Primary navigation">
            <ul className="nav-list">
                <li>
                    <NavLink to="/" end>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu">
                        MENU
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reservations">
                        RESERVATIONS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order">
                        ORDER ONLINE
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        LOGIN
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}