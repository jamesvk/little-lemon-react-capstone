import {useState} from "react";

export default function BookingForm({availableTimes, dispatch, submitForm}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");

    const today = new Date().toISOString().split("T")[0];

    const [touched, setTouched] = useState({
        date: false,
        time: false,
        guests: false,
        occasion: false,
    });

    const errors = {
        date: !date
            ? "Please choose a date."
            : date < today
            ? "Date cannot be in the past."
            : "",
        time: !time ? "Please choose a time." : "",
        guests: guests === ""
            ? "Please enter number of guests."
            : Number.isNaN(Number(guests))
            ? "Guests must be a number."
            : Number(guests) < 1
            ? "Must be at least 1 guest."
            : Number(guests) > 10
            ? "Must be 10 guests or fewer."
            : "",
        occasion: !occasion ? "Please choose an occasion." : "",
    };

    const isFormValid =
        !errors.date && !errors.time && !errors.guests && !errors.occasion;


    function handleSubmit(e) {
        e.preventDefault();

        // mark everything touched so errors show if user tries to submit
        setTouched({ date: true, time: true, guests: true, occasion: true });

        const booking = {date, time, guests: Number(guests), occasion};
        // onAddBooking(booking);
        submitForm(booking);
    }
    /* Prevent the browser’s default form submission behavior
    (page reload) so React can handle the submit event, preserve state,
    and process the form data (e.g., validation or API calls) without
    refreshing the page. */


    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    aria-invalid={Boolean(touched.date && errors.date)}
                    aria-describedby="res-date-error"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => {
                        const selectedDate = e.target.value;
                        setDate(selectedDate);

                        dispatch({
                            type:"UPDATE_TIMES",
                            date: new Date(selectedDate)
                        })
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, date: true }))}
                />
                {touched.date && errors.date && <p className="error" role="alert">{errors.date}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    aria-invalid={Boolean(touched.time && errors.time)}
                    aria-describedby="res-time-error"
                    value={time}
                    required
                    onChange={(e) => setTime(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, time: true }))}
                >
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
                {touched.time && errors.time && <p className="error" role="alert">{errors.time}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input
                    aria-invalid={Boolean(touched.guests && errors.guests)}
                    aria-describedby="res-guests-error"
                    type="number"
                    placeholder="1"
                    required
                    min={1} max={10}
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, guests: true }))}
                />
                {touched.guests && errors.guests && (
                    <p className="error" role="alert">{errors.guests}</p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    aria-invalid={Boolean(touched.occasion && errors.occasion)}
                    aria-describedby="res-occasion-error"
                    required
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, occasion: true }))}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {touched.occasion && errors.occasion && (
                    <p className="error" role="alert">{errors.occasion}</p>
                )}
            </div>

            <button type="submit" disabled={!isFormValid} aria-label="On Click">
                Make Your Reservation
            </button>
        </form>
    )
}