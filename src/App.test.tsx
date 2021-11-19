import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows the title has rendered", () => {
  render(<App />);
  const title = screen.getByText(/Pawn-Chess/i);
  expect(title).toBeInTheDocument();
});
