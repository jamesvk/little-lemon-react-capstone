import {useState, useEffect} from "react";
import BookingForm from "../components/BookingForm";

const STORAGE_KEY = "bookings";

export default function BookingPage({availableTimes, dispatch, submitForm}) {
    const [bookingData, setBookingData] = useState([]);
    const [submitError, setSubmitError] = useState("");

      useEffect(() => {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        setBookingData(existing);
    }, []);

    // function handleAddBooking(booking) {
    //     setBookingData((prev) => [...prev, booking]);
    // }
    function handleSubmit(booking) {
        setSubmitError("");

        const result = submitForm(booking); // Main persists + navigates

        if (!result.success) {
            if (result.reason === "LIMIT_REACHED") {
            setSubmitError("You can only have 2 confirmed bookings. Please delete an existing booking.");
            } else {
            setSubmitError("Something went wrong submitting your reservation. Please try again.");
            }
            return;
        }

        setBookingData((prev) => [...prev, booking]);
    }

    function handleDelete(indexToDelete) {
        setBookingData((prev) => {
            const next  = prev.filter((_,i) => i !== indexToDelete);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        })
    }

    return (
        <section className="reservations-page" aria-label="Reservations">
            {submitError && (
                <p className="reservations-error error" role="alert">
                    {submitError}
                </p>
            )}
            <div className="reservations-form">
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    // onAddBooking={handleAddBooking}
                    submitForm={handleSubmit}
                />
            </div>
            {bookingData.length > 0 && (
                <section className="reservations-table-section" aria-label="Confirmed bookings">
                    <h2 className="reservations-table-title">Confirmed bookings</h2>
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