import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewItemForm from "../NewItemForm";

describe("NewItemForm component", () => {
  it("submits form data and navigates to the new item", async () => {
    const user = userEvent.setup();
    const history = createMemoryHistory({ initialEntries: ["/add"] });
    const addItem = jest.fn().mockResolvedValue({});

    render(
      <Router history={history}>
        <NewItemForm addItem={addItem} />
      </Router>
    );

    await user.selectOptions(screen.getByLabelText(/category/i), "drinks");
    await user.type(screen.getByLabelText(/name/i), "Gin Fizz");
    await user.type(screen.getByLabelText(/description/i), "Citrus kick");
    await user.type(screen.getByLabelText(/recipe/i), "Shake with ice");
    await user.type(screen.getByLabelText(/serve/i), "Serve cold");

    await user.click(screen.getByRole("button", { name: /save item/i }));

    await waitFor(() => expect(addItem).toHaveBeenCalled());

    expect(addItem).toHaveBeenCalledWith(
      "drinks",
      expect.objectContaining({
        id: "gin-fizz",
        name: "Gin Fizz"
      })
    );
    expect(history.location.pathname).toBe("/drinks/gin-fizz");
  });
});
