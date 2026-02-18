import {render, screen} from "@testing-library/react";
import {test, expect} from "vitest";
import userEvent from "@testing-library/user-event";
import {vi} from "vitest";
import BookingForm from "./BookingForm";

test("Renders the Choose date label", () => {
    render (
        <BookingForm
            availableTimes={["17:00", "18:00"]}
            dispatch={() => {}}
        />
    )

    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
})

test("BookingForm can be submitted by the user", async () => {
    const user = userEvent.setup();

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(
        <BookingForm
            availableTimes={["17:00", "18:00"]}
            dispatch={() => {}}
        />
    )

    await user.click(screen.getByDisplayValue("Make Your Reservation"));

    expect(logSpy).toHaveBeenCalledTimes(1);

    expect(logSpy).toHaveBeenCalledWith(
        expect.objectContaining({
        date: "",
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
        })
    );

    logSpy.mockRestore();
})