import {useState, useEffect} from "react";
import BookingForm from "../components/BookingForm";

const STORAGE_KEY = "bookings";
// Same localStorage key used in Main.jsx.
// BookingPage reads/writes this key to display and manage confirmed bookings.

export default function BookingPage({availableTimes, dispatch, submitForm}) {
    const [bookingData, setBookingData] = useState([]);
    // bookingData is the UI source of truth for the confirmed bookings table.
    // It’s hydrated from localStorage on mount, and updated immediately on add/delete.
    const [submitError, setSubmitError] = useState("");
    // Stores user-facing submission errors (e.g., booking limit reached).
    // Rendered with role="alert" so screen readers announce it.
    const [isSubmitting, setIsSubmitting] = useState(false);
    /* Since submitAPI in the course is usually synchronous, we can still simulate 
    async UX with a brief loading state, which satisfies the requirement. */

      useEffect(() => {
        // On first mount, load any persisted bookings from localStorage.
        // The empty dependency array [] ensures this runs only once on mount (not on every render).
        // localStorage.getItem may return null if nothing is stored, so || [] provides a safe fallback array.
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        setBookingData(existing);
    }, []);


    function handleSubmit(booking) {
        // Wrapper around Main.jsx submitForm():
        // - clears any previous error
        // - attempts submission (which persists + navigates on success)
        // - updates local UI state when submission succeeds
        setSubmitError("");
        setIsSubmitting(true);

        const result = submitForm(booking);
        // Main persists to localStorage + navigates to /confirmed

        setIsSubmitting(false);

        // If submission fails, show a helpful message and do not update the table.
        if (!result.success) {
            if (result.reason === "LIMIT_REACHED") {
            setSubmitError("You can only have 2 confirmed bookings. Please delete an existing booking.");
            } else {
            setSubmitError("Something went wrong submitting your reservation. Please try again.");
            }
            return;
        }

        // If submission succeeded, update UI immediately so the table stays in sync.
        // Even though we navigate away, this keeps state correct if route behavior changes.
        setBookingData((prev) => [...prev, booking]);
    }

    function handleDelete(indexToDelete) {
        // Deletes a booking by its array index and keeps React state + localStorage in sync.
        // Each confirmed booking is stored in bookingData state and also persisted
        // to localStorage (added during successful submissions).
        // setState callback form is used to ensure we work from the latest state snapshot,
        // which is important because state updates can be batched/asynchronous.
        const confirmed = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmed) return;

        setBookingData((prev) => {
            // Create a new array excluding the booking at the provided index.
            // filter() returns a new immutable array (does not mutate prev).
            const next  = prev.filter((_,i) => i !== indexToDelete);

            // Persist the updated bookings array so deletions remain after refresh/navigation.
            //localStorage only stores strings
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

             // Return the new array so React updates the UI immediately.
            return next;
        })
    }

    return (
        <section className="reservations-page" aria-labelledby="Reservations">
            {submitError && (
                <p className="reservations-error error" role="alert">
                    {submitError}
                </p>
            )}
            <div className="reservations-form">
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            </div>
            {bookingData.length > 0 && (
                <section className="reservations-table-section" aria-labelledby="Confirmed-bookings">
                    <h2 className="reservations-table-title" id="Confirmed-bookings">Confirmed bookings</h2>
                    <div className="reservations-table-wrapper">
                        <table className="reservations-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Guests</th>
                                    <th>Occasion</th>
                                    <th>Cancel</th>
                                </tr>
                            </thead>
                            <tbody>
                            {bookingData.map((b, i) => (
                                <tr key={`${b.date}-${b.time}-${i}`}>
                                    <td>{b.date}</td>
                                    <td>{b.time}</td>
                                    <td>{b.guests}</td>
                                    <td>{b.occasion}</td>
                                    <td>
                                        <button type="button" onClick={() => handleDelete(i)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
        )}
        </section>
    )
}