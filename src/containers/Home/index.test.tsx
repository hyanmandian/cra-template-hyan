import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Home from "./";

describe("Home", () => {
  test("increment counter", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("counter")).toHaveTextContent("0");

    fireEvent.click(getByTestId("increment-button"));
    expect(getByTestId("counter")).toHaveTextContent("1");

    fireEvent.click(getByTestId("increment-button"));
    expect(getByTestId("counter")).toHaveTextContent("2");
  });

  test("decrement counter", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("counter")).toHaveTextContent("0");

    fireEvent.click(getByTestId("decrement-button"));
    expect(getByTestId("counter")).toHaveTextContent("-1");

    fireEvent.click(getByTestId("decrement-button"));
    expect(getByTestId("counter")).toHaveTextContent("-2");
  });
});
