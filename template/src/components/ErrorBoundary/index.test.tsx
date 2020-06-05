import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";

import { ErrorBoundary } from ".";

function Component() {
  const [showException, setShowException] = useState(false);

  if (showException) {
    throw new Error("Exception.");
  }

  return (
    <button
      onClick={() => setShowException(true)}
      data-testid="set-exception"
    ></button>
  );
}

type Config = {
  onError?: () => void;
};

function setup(config?: Config) {
  return render(
    <ErrorBoundary {...config}>
      <Component />
    </ErrorBoundary>
  );
}

describe("components > ErrorBoundary", () => {
  it("should show default fallback when some exception happen", () => {
    const onError = jest.fn();

    const { getByTestId, queryByTestId } = setup({ onError });

    expect(queryByTestId("error-boundary-fallback")).not.toBeInTheDocument();
    fireEvent.click(getByTestId("set-exception"));
    expect(queryByTestId("error-boundary-fallback")).toBeInTheDocument();
  });
});
