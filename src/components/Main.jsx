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
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";
import {fetchAPI, submitAPI} from "../api"
import {useNavigate} from "react-router-dom";

const STORAGE_KEY = "bookings";
// Key used to persist confirmed reservations in localStorage.
// Keeping it as a constant avoids typos across components and makes it easy to rename later.

export function updateTimes(state, action) {
    // Reducer that updates the available reservation times whenever the selected date changes.
    // `dispatch({ type: "UPDATE_TIMES", date: new Date(selectedDate) })` is triggered in BookingForm.
    switch(action.type) {
        case "UPDATE_TIMES": {
        // fetchAPI() returns the available times for a given date (provided by the course API stub).
        // Reducer returns the *next state* (new array of times).
            const newTimes = fetchAPI(action.date);
            return newTimes;
        }
        default:
            // Always return the current state for unknown actions.
            return state;
    }
}

export function initializeTimes() {
    // Lazy initializer for useReducer:
    // Runs once on initial mount to generate the initial availableTimes state.
    const today = new Date();
    return fetchAPI(today);
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
    // Lazy initializer: initializeTimes([]) runs once on mount; [] is passed as the initialArg (not the initial state itself)

    const navigate = useNavigate();

    function submitForm(formData) {
         // Handles submission + persistence + navigation.
        // Returns a result object so BookingPage can show a friendly error message.

        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        // Pull existing bookings from localStorage so we can enforce limits and persist updates.

        // deny 3rd booking
        // This is enforced here (the persistence layer) to prevent bypassing via UI/state changes.
        if (existing.length >= 2) {
            return {success: false, reason: "LIMIT_REACHED"}
        }

        const success = submitAPI(formData);
        // submitAPI() is the course-provided stub that simulates a server submission response.

        if (success) {
            const updated = [...existing, formData]
            // Append the new booking to the persisted list.
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

            /* Navigate to a confirmation page after successful submission. Synchronous function, but added to the queue to run after the rest of the code block
            runs. Return below it still runs. */
            navigate("/confirmed");

            return {success: true};
        }

        // If submission fails, return a reason so the UI can communicate it.
        return {success: false, reason: "SUBMIT_FAILED"};
    }

    return (
        <main id="main-content" aria-label="Main content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route
                    path="/reservations"
                    element={<BookingPage
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitForm}
                    />}
                />
                <Route path="/order" element={<OrderOnlinePage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/confirmed" element={<ConfirmedBookingPage />} />
            </Routes>
        </main>
    )
}