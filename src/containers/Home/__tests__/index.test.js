import React from "react";
import { render, fireEvent } from "react-testing-library";

import Home from "../";

describe("Home", () => {
  test("default state", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  test("increment counter", () => {
    const { container, getByTestId } = render(<Home />);

    expect(getByTestId("counter")).toHaveTextContent("0");
    fireEvent.click(getByTestId("increment-button"));
    expect(getByTestId("counter")).toHaveTextContent("1");
    fireEvent.click(getByTestId("increment-button"));
    expect(getByTestId("counter")).toHaveTextContent("2");

    expect(container).toMatchSnapshot();
  });

  test("decrement counter", () => {
    const { container, getByTestId } = render(<Home />);

    expect(getByTestId("counter")).toHaveTextContent("0");
    fireEvent.click(getByTestId("decrement-button"));
    expect(getByTestId("counter")).toHaveTextContent("-1");
    fireEvent.click(getByTestId("decrement-button"));
    expect(getByTestId("counter")).toHaveTextContent("-2");

    expect(container).toMatchSnapshot();
  });
});
