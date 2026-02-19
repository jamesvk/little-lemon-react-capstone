import { test, expect, vi } from "vitest";
import { fetchAPI } from "../api";

// IMPORTANT: you need initializeTimes exported to test it directly
import { initializeTimes } from "./Main.jsx"; // adjust path if needed
import { updateTimes } from "./Main.jsx"; // adjust path if needed


vi.mock("../api", () => ({
  fetchAPI: vi.fn(),
  submitAPI: vi.fn(),
}));

// test("initializeTimes returns non-empty array from fetchAPI", () => {
//   fetchAPI.mockReturnValue(["17:00", "18:00"]);

//   const times = initializeTimes();

//   expect(times).toEqual(["17:00", "18:00"]);
//   expect(times.length).toBeGreaterThan(0);
//   expect(fetchAPI).toHaveBeenCalledTimes(1);
//   expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
// });

test("updateTimes returns new times from fetchAPI for the selected date", () => {
  fetchAPI.mockReturnValue(["19:00", "20:30"]);

  const state = ["17:00"]; // previous state doesn't matter here
  const selectedDate = new Date("2026-02-20");
  const action = { type: "UPDATE_TIMES", date: selectedDate };

  const newState = updateTimes(state, action);

  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
  expect(newState).toEqual(["19:00", "20:30"]);
});