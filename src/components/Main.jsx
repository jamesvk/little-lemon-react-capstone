import {Routes, Route} from "react-router-dom";
/* In React Router, <Routes> is the container that
scans all its child <Route> elements and renders the
first one that matches the current URL, while each <Route>
defines a specific path-to-component mapping—meaning it tells
the app what UI/component to display when the browser URL matches that route. */
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import OrderOnlinePage from "../pages/OrderOnlinePage";
// import LoginPage from "./pages/LoginPage";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/order" element={<OrderOnlinePage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
            </Routes>
        </main>
    )
}