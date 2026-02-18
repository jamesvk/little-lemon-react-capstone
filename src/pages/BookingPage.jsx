import {useState} from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage({availableTimes, dispatch}) {
    const [bookingData, setBookingData] = useState([]);

    function handleAddBooking(booking) {
        setBookingData((prev) => [...prev, booking]);
    }

    return (
        <>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                onAddBooking={handleAddBooking}
            />

            {bookingData.length > 0 && (
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
                        {bookingData.map((b,i) => (
                            <tr key={i}>
                                <td>{b.date}</td>
                                <td>{b.time}</td>
                                <td>{b.guests}</td>
                                <td>{b.occasion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}