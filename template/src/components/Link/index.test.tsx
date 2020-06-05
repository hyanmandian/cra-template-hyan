import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { Link } from ".";

describe("components > Link", () => {
  it("should render React Router Link component when `to` is internal", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Link to="/" data-testid="link" />
      </Router>
    );

    fireEvent.click(getByTestId("link"));
    expect(history.location.pathname).toBe("/");
  });

  it("should render Anchor component when `to` is external", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Link to="https://example.com/" data-testid="link" onClick={onClick} />
    );

    fireEvent.click(getByTestId("link"));
    expect(window.location.href).toBe("https://example.com/");
    expect(onClick).toBeCalled();
  });
});
