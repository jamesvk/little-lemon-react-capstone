import {useLocation, Link} from "react-router-dom";


export default function ConfirmedBookingPage() {
    // const {state} = useLocation();
    // const booking = Array.isArray(state) ? state : [];

    return (
        <section className="confirmed-booking-page">
            <div className="confirmed-booking-container">
                <h1 className="confirmed-booking-title">
                    Booking Confirmed
                </h1>

                <p className="confirmed-booking-message">
                    Thank you! Your reservation has been successfully submitted.
                    You can return to the Reservations page to view your confirmed
                    booking details.
                </p>
            </div>
        </section>
    )
}