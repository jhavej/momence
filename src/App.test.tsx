import { render, screen } from "@testing-library/react";
import App from "./App";


test("app renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/Conversion Form/i);
  expect(linkElement).toBeInTheDocument();
});