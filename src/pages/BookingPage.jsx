import BookingForm from "../components/BookingForm"

export default function BookingPage({availableTimes, dispatch}) {
    return <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
}