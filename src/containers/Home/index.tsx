import React, { useState } from "react";

import { Meta } from "#/components/Meta";

import styles from "./styles.module.scss";

export default function Home() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className={styles.wrapper}>
      <Meta title="Home" />
      Hello :D <br />
      <button onClick={increment} data-testid="increment-button">
        +
      </button>
      <span data-testid="counter">{counter}</span>
      <button onClick={decrement} data-testid="decrement-button">
        -
      </button>
    </div>
  );
}
