import React from "react";
import { render } from "@testing-library/react";

import { Loader } from ".";

describe("components > Loader", () => {
  it("should show loader", () => {
    const { getByTestId, rerender } = render(
      <Loader data-testid="loader" show={false} />
    );

    expect(getByTestId("loader")).not.toBeVisible();

    rerender(<Loader data-testid="loader" show={true} />);

    expect(getByTestId("loader")).toBeVisible();
  });
});
