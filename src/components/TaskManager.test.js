import { render, screen, fireEvent } from "@testing-library/react";
import TaskManager from "./TaskManager";

test("adds a new task and verifies it appears in the list", () => {
  render(<TaskManager />);
  const addButton = screen.getByText("Add Task");

  fireEvent.click(addButton);
  expect(screen.getByText("Task 1 - Pending")).toBeInTheDocument();
});

test("toggles a task’s completion status", () => {
  render(<TaskManager />);
  const addButton = screen.getByText("Add Task");

  fireEvent.click(addButton);
  const toggleButton = screen.getByText("Toggle");
  fireEvent.click(toggleButton);

  expect(screen.getByText("Task 1 - Completed")).toBeInTheDocument();
});

test("adds multiple tasks and verifies they appear", () => {
  render(<TaskManager />);
  const addButton = screen.getByText("Add Task");

  fireEvent.click(addButton);
  fireEvent.click(addButton);
  
  expect(screen.getByText("Task 1 - Pending")).toBeInTheDocument();
  expect(screen.getByText("Task 2 - Pending")).toBeInTheDocument();
});

test("attempts to toggle a non-existent task", () => {
  render(<TaskManager />);
  expect(() => fireEvent.click(screen.getByText("Toggle"))).toThrow();
});

test("adds a task and ensures order is maintained", () => {
  render(<TaskManager />);
  const addButton = screen.getByText("Add Task");

  fireEvent.click(addButton);
  fireEvent.click(addButton);
  
  const tasks = screen.getAllByText(/Task \d+/);
  expect(tasks[0].textContent).toContain("Task 1");
  expect(tasks[1].textContent).toContain("Task 2");
});
test("toggles a task’s completion status", () => {
    render(<TaskManager />);
    const addButton = screen.getByText("Add Task");
  
    fireEvent.click(addButton);
    const toggleButton = screen.getByText("Toggle");
    fireEvent.click(toggleButton);
  
    expect(screen.getByText("Task 1 - Completed")).toBeInTheDocument();
  });