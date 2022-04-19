import { render, screen, fireEvent, within } from "./test-utils";
import App from "../App";

test("renders app", () => {
  render(<App />);

  const title = screen.getByText(/Simple Alert/i);
  expect(title).toBeInTheDocument();
});

test("add an alert", async () => {
  render(<App />);
  const Title = screen.getByRole("textbox", { name: "Title" });
  const Text = screen.getByRole("textbox", { name: "Text" });
  const Link = screen.getByRole("textbox", { name: "Link" });
  const TimeLimit = screen.getByRole("spinbutton", { name: "Time Limit" });
  const AlertType = screen.getByRole("button", { name: "Alert Type ​" });
  const AddAlert = screen.getByRole("button", { name: "Add Alert" });

  fireEvent.change(Title, { target: { value: "Hello world" } });
  fireEvent.change(Text, {
    target: { value: "This is a welcome message from simple alert tests" },
  });
  fireEvent.change(Link, {
    target: { value: "https://www.youtube.com/watch?v=W9tCzsDeeKk" },
  });
  fireEvent.change(TimeLimit, { target: { value: "3" } });

  expect(Title).toHaveValue("Hello world");
  expect(Text).toHaveValue("This is a welcome message from simple alert tests");
  expect(Link).toHaveValue("https://www.youtube.com/watch?v=W9tCzsDeeKk");
  expect(TimeLimit).toHaveValue(3);

  fireEvent.mouseDown(AlertType);

  const listbox = within(screen.getByRole("listbox"));

  fireEvent.click(listbox.getByText(/success/i));

  expect(AlertType).toHaveTextContent(/success/i);

  fireEvent.click(AddAlert);

  expect(screen.getByTestId("SuccessOutlinedIcon")).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByTestId("SuccessOutlinedIcon")).not.toBeInTheDocument();
  }, [5]);
});
