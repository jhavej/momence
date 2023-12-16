import { render, screen } from "@testing-library/react";
import App from "./App";

test("app renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tech Task | Momence & Jakub Havej/i);
  expect(linkElement).toBeInTheDocument();
});
