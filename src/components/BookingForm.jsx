import {useState} from "react";

export default function BookingForm({availableTimes, dispatch}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    function handleSubmit(e) {
        e.preventDefault();
        // Sending this later to an API
        console.log({date, time, guests, occasion});
    }
    /* Prevent the browser’s default form submission behavior
    (page reload) so React can handle the submit event, preserve state,
    and process the form data (e.g., validation or API calls) without
    refreshing the page. */


    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((t) => (
                    <option key={t} value={t}>
                        {t}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation"/>
        </form>
    )
}