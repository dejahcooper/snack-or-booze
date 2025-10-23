import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Menu from "../Menu";

const SAMPLE_ITEMS = [
  { id: "nachos", name: "Nachos" },
  { id: "pretzel", name: "Pretzel" }
];

describe("Menu component", () => {
  it("renders a list of items with links", () => {
    render(
      <MemoryRouter>
        <Menu title="Snacks" items={SAMPLE_ITEMS} basePath="snacks" />
      </MemoryRouter>
    );

    expect(screen.getByText("Nachos")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /pretzel/i })).toHaveAttribute(
      "href",
      "/snacks/pretzel"
    );
  });

  it("shows placeholder text when no items exist", () => {
    render(
      <MemoryRouter>
        <Menu title="Drinks" items={[]} basePath="drinks" />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/nothing here yet -- why not add something/i)
    ).toBeInTheDocument();
  });
});
