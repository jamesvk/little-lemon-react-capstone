import {Routes, Route} from "react-router-dom";
/* In React Router, <Routes> is the container that
scans all its child <Route> elements and renders the
first one that matches the current URL, while each <Route>
defines a specific path-to-component mapping—meaning it tells
the app what UI/component to display when the browser URL matches that route. */
import {useReducer} from "react";
/* useReducer is a React Hook used for managing complex state logic,
especially when state updates depend on actions or multiple related
values. It works similarly to Redux: you have a reducer function
that defines how state changes based on an action, and React returns
the current state plus a dispatch function used to trigger updates.*/
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import OrderOnlinePage from "../pages/OrderOnlinePage";
// import LoginPage from "./pages/LoginPage";

function updateTimes(state, action) {
        switch(action.type) {
            case "UPDATE_TIMES":
                return state; //placeholder for now
            default:
                return state;
        }
    }

function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
    /* React Hooks (such as useReducer, useState, and useEffect) must be called inside React
    function components or custom hooks, not in regular JavaScript files or outside component
    scope. This is because React relies on hooks being executed in a consistent order on every
    render to correctly track stat */
    /* The third argument in useReducer is a lazy initializer function used to compute the initial
    state only once when the component first mounts. Instead of calling the initializer directly
    (which would run on every render), React invokes this function a single time, passes in the
    initial argument, and stores the returned value as the starting state. This improves
    performance and prevents unnecessary recomputation, especially when the initial state
    requires expensive calculations or data preparation. */


    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route
                    path="/reservations"
                    element={<BookingPage
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                    />}
                />
                <Route path="/order" element={<OrderOnlinePage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
            </Routes>
        </main>
    )
}