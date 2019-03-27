import React, { useState } from "react";

import Head from "#/components/Head";
import Container from "#/components/Container";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <Head title="Home" />
      Hello :D <br />
      <button
        data-testid="increment-button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <span data-testid="counter">{counter}</span>
      <button
        data-testid="decrement-button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </Container>
  );
}
