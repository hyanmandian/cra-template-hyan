import React, { useState } from "react";

import { Meta } from "#/components/Meta";

import styles from "./styles.module.scss";

const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className={styles["counter-wrapper"]}>
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
};

export default Home;
