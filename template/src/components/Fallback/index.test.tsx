import React from "react";
import { render } from "@testing-library/react";

import { Fallback } from ".";

describe("components > Fallback", () => {
  it("should render", () => {
    const { getByTestId } = render(<Fallback data-testid="fallback" />);

    expect(getByTestId("fallback")).toBeInTheDocument();
  });
});
