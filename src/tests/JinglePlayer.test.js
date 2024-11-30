import React from "react";
import { render, screen, act } from "@testing-library/react";
import JinglePlayer from "../components/JinglePlayer"; 

jest.mock("../assets/christmas-winter.mp3", () => "mock-audio-path");

describe("JinglePlayer", () => {
  test("plays audio when shouldPlay is true", () => {
    const mockPlay = jest.fn();
    const mockPause = jest.fn();
    const mockCurrentTime = { currentTime: 0 };

    HTMLMediaElement.prototype.play = mockPlay;
    HTMLMediaElement.prototype.pause = mockPause;

    render(<JinglePlayer shouldPlay={true} />);
    act(() => {
      expect(mockPlay).toHaveBeenCalled();
      expect(mockPause).not.toHaveBeenCalled();
    });
  });

  test("pauses audio when shouldPlay is false", () => {
    const mockPlay = jest.fn();
    const mockPause = jest.fn();
    const mockCurrentTime = { currentTime: 0 };

    HTMLMediaElement.prototype.play = mockPlay;
    HTMLMediaElement.prototype.pause = mockPause;

    render(<JinglePlayer shouldPlay={false} />);
    act(() => {
      expect(mockPause).toHaveBeenCalled();
      expect(mockPlay).not.toHaveBeenCalled();
    });
  });

  test("audio is reset when shouldPlay changes from true to false", () => {
    const mockPlay = jest.fn();
    const mockPause = jest.fn();
    const mockCurrentTime = { currentTime: 0 };

    HTMLMediaElement.prototype.play = mockPlay;
    HTMLMediaElement.prototype.pause = mockPause;

    const { rerender } = render(<JinglePlayer shouldPlay={true} />);
    
    expect(mockPlay).toHaveBeenCalled();
    rerender(<JinglePlayer shouldPlay={false} />);
    expect(mockPause).toHaveBeenCalled();
  });
});