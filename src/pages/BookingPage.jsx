// import {useState} from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage({availableTimes, dispatch, submitForm}) {
    // const [bookingData, setBookingData] = useState([]);

    // function handleAddBooking(booking) {
    //     setBookingData((prev) => [...prev, booking]);
    // }

    return (

        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            // onAddBooking={handleAddBooking}
            submitForm={submitForm}
        />
    )
}