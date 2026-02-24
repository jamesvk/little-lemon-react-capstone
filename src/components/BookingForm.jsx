import {useState} from "react";

export default function BookingForm({availableTimes, dispatch, submitForm, isSubmitting}) {
    // Controlled form state: each field value is stored in React state.
    // This ensures React is the single source of truth for form data.
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState("1"); // stored as string for controlled <input type="number">
    const [occasion, setOccasion] = useState("Birthday");

    // Used to prevent selecting past dates in the date input.
    // Format matches the HTML <input type="date"> expected format (YYYY-MM-DD).
    const today = new Date().toISOString().split("T")[0];

    // Tracks whether each field has been interacted with ("touched").
    // This prevents showing validation errors before user interaction.
    const [touched, setTouched] = useState({
        date: false,
        time: false,
        guests: false,
        occasion: false,
    });

    // Centralized validation logic.
    // Each property returns either an error string or an empty string if valid.
    // This makes validation declarative and easy to maintain.
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

    // The form is valid only when all error strings are empty.
    // This boolean is used to disable the submit button.
    const isFormValid =
        !errors.date && !errors.time && !errors.guests && !errors.occasion;


    function handleSubmit(e) {
        // Mark all fields as touched so any validation errors become visible.
        e.preventDefault();

        // mark everything touched so errors show if user tries to submit
        setTouched({ date: true, time: true, guests: true, occasion: true });

        // Convert guests from string → number before sending upward.
        // Keeps state flexible while ensuring proper data type for storage/API.
        const booking = {date, time, guests: Number(guests), occasion};

        // Pass booking data upward to BookingPage (which wraps Main submitForm).
        // BookingPage handles persistence + navigation + limit enforcement.
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

                        // Notify reducer in Main.jsx to update available times.
                        // Keeps availableTimes state centralized.
                        dispatch({
                            type:"UPDATE_TIMES",
                            date: new Date(selectedDate)
                        })
                    }}
                    // onBlur fires when an input loses focus (user clicks away or tabs out);
                    onBlur={() => setTouched((t) => ({ ...t, date: true }))}
                />
                {/* Only show error if field has been touched and has an error. */}
                {touched.date && errors.date && <p className="error" role="alert" id="res-date-error">{errors.date}</p>}
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
                    {/* availableTimes is derived from reducer in Main.jsx */}
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
                {touched.time && errors.time && <p className="error" role="alert" id="res-date-error">{errors.time}</p>}
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
                    <p className="error" role="alert" id="res-date-error">{errors.guests}</p>
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
                    <p className="error" role="alert" id="res-date-error">{errors.occasion}</p>
                )}
            </div>

            {/* Submit button is disabled when form is invalid. */}
            <button type="submit" disabled={!isFormValid || isSubmitting} aria-label="On Click">
                Make Your Reservation
            </button>
        </form>
    )
}