import {useLocation, Link} from "react-router-dom";


export default function ConfirmedBookingPage() {
    // const {state} = useLocation();
    // const booking = Array.isArray(state) ? state : [];

    return (
        <section>
            <h1>Booking Confirmed</h1>
            <p>
                Thank you! Your reservation has been successfully submitted. 
                You can return to the Reservations page to view your confirmed 
                booking details.
            </p>

            {/* {booking.length > 0 ? (
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
                            {booking.map((b,i) => (
                                <tr key={`${b.date}-${b.time}-${i}`}>
                                    <td>{b.date}</td>
                                    <td>{b.time}</td>
                                    <td>{b.guests}</td>
                                    <td>{b.occasion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <>
                        <p>No booking details found.</p>
                        <Link to="/reservations">Back to Reservations</Link>
                    </>
                )} */}
        </section>
    )
}