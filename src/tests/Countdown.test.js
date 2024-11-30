import React from "react";
import { render, screen } from "@testing-library/react";
import Countdown from "../components/Countdown";

const mockDate = (dateString) => {
  const originalDate = global.Date;
  global.Date = jest.fn(() => new Date(dateString));
  global.Date.now = jest.fn(() => new Date(dateString).getTime());
  return originalDate;
};

describe("Countdown", () => {
  afterEach(() => {
    global.Date = global.Date.mockRestore();
  });

  test("shows the countdown to December 1st if it's before December 1st", () => {
    mockDate("2024-11-28");
    render(<Countdown />);
    expect(screen.getByText(/⏳ \d+ Days Until December 1st ⏳/)).toBeInTheDocument();
  });

  test("shows the countdown to Christmas if it's December", () => {
    mockDate("2024-12-01");
    render(<Countdown />);
    expect(screen.getByText(/🎄 \d+ Days Until Christmas 🎄/)).toBeInTheDocument();
  });

  test("shows 0 days left when the target date is reached", () => {
    mockDate("2024-12-25");
    render(<Countdown />);
    expect(screen.getByText(/🎄 0 Days Until Christmas 🎄/)).toBeInTheDocument();
  });

  test("calculates the correct number of days left", () => {
    mockDate("2024-11-30");
    render(<Countdown />);
    expect(screen.getByText(/⏳ 1 Days Until December 1st ⏳/)).toBeInTheDocument();
  });
});