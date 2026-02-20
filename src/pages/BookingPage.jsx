import {useState, useEffect} from "react";
import BookingForm from "../components/BookingForm";

const STORAGE_KEY = "bookings";

export default function BookingPage({availableTimes, dispatch, submitForm}) {
    const [bookingData, setBookingData] = useState([]);

      useEffect(() => {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        setBookingData(existing);
    }, []);

    // function handleAddBooking(booking) {
    //     setBookingData((prev) => [...prev, booking]);
    // }
    function handleSubmit(booking) {
        const success = submitForm(booking); // Main persists + navigates
        if (success) setBookingData((prev) => [...prev, booking]);
    }

    return (
        <section aria-label="Reservations">
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                // onAddBooking={handleAddBooking}
                submitForm={handleSubmit}
            />
            {bookingData.length > 0 && (
                <section aria-label="Confirmed bookings">
                    <h2>Confirmed bookings</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Occasion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookingData.map((b, i) => (
                            <tr key={`${b.date}-${b.time}-${i}`}>
                            <td>{b.date}</td>
                            <td>{b.time}</td>
                            <td>{b.guests}</td>
                            <td>{b.occasion}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
        )}
        </section>
    )
}