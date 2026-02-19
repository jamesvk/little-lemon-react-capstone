import { test, expect, beforeEach } from "vitest";

const STORAGE_KEY = "bookings";

beforeEach(() => {
  localStorage.clear(); // reset before each test
});

test("writes bookings to localStorage", () => {
  const booking = {
    date: "2026-02-20",
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
  };

  // Simulate your app logic
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updated = [...existing, booking];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));

  expect(stored).toHaveLength(1);
  expect(stored[0]).toEqual(booking);
});

test("reads bookings from localStorage", () => {
  const bookings = [
    {
      date: "2026-02-20",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    },
  ];

  localStorage.setItem("bookings", JSON.stringify(bookings));

  const stored = JSON.parse(localStorage.getItem("bookings"));

  expect(stored).toEqual(bookings);
  expect(stored[0].time).toBe("18:00");
});