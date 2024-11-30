import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskModal from "../components/TaskModal";

describe("TaskModal", () => {
  const mockOnClose = jest.fn(); 
  const taskText = "Complete the React unit tests"; 

  test("renders the task and modal correctly", () => {
    render(<TaskModal task={taskText} onClose={mockOnClose} />);
    expect(screen.getByText(taskText)).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  test("calls onClose when the close button is clicked", () => {
    render(<TaskModal task={taskText} onClose={mockOnClose} />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("closes the modal when the Escape key is pressed", () => {
    render(<TaskModal task={taskText} onClose={mockOnClose} />);
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape", code: "Escape" });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when other keys are pressed", () => {
    render(<TaskModal task={taskText} onClose={mockOnClose} />);
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Enter", code: "Enter" });
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});