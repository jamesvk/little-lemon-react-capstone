export default function ConfirmedBookingPage() {

    return (
        <section className="confirmed-booking-page" aria-labelledby="confirmed-booking-heading">
            <div className="confirmed-booking-container">
                <h1 className="confirmed-booking-title" id="confirmed-booking-heading">
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