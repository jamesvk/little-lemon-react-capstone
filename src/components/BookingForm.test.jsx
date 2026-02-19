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

test("BookingForm calls submitForm with form data on submit", async () => {
  const user = userEvent.setup();
  const submitForm = vi.fn();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={submitForm}
    />
  );

  await user.click(screen.getByDisplayValue("Make Your Reservation"));

  expect(submitForm).toHaveBeenCalledTimes(1);
  expect(submitForm).toHaveBeenCalledWith(
    expect.objectContaining({
      date: "",
      time: "17:00",
      guests: 1,
      occasion: "Birthday",
    })
  );
});