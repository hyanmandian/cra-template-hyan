import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Home from "./";

function setup() {
  return render(<Home />);
}

describe("Home", () => {
  test("increment counter", () => {
    const { getByTestId } = setup();

    expect(getByTestId("counter")).toHaveTextContent("0");

    fireEvent.click(getByTestId("increment-button"));
    expect(getByTestId("counter")).toHaveTextContent("1");

    fireEvent.click(getByTestId("increment-button"));
    expect(getByTestId("counter")).toHaveTextContent("2");
  });

  test("decrement counter", () => {
    const { getByTestId } = setup();

    expect(getByTestId("counter")).toHaveTextContent("0");

    fireEvent.click(getByTestId("decrement-button"));
    expect(getByTestId("counter")).toHaveTextContent("-1");

    fireEvent.click(getByTestId("decrement-button"));
    expect(getByTestId("counter")).toHaveTextContent("-2");
  });
});
