import React, { useState, Fragment } from "react";
import { useQuery } from "react-query";

import { Meta } from "#/components/Meta";
import { Loader } from "#/components/Loader";
import { getMessage } from "#/api";

import styles from "./styles.module.scss";

const Home: React.FC = () => {
  const { status, data } = useQuery("message", getMessage);

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <Fragment>
      <Meta title="Home" />

      <Loader data-testid="loader" show={status === "loading"} />

      <div className={styles["counter-wrapper"]}>
        {data && (
          <Fragment>
            {data?.message} <br />
          </Fragment>
        )}
        <button onClick={increment} data-testid="increment-button">
          +
        </button>
        <span data-testid="counter">{counter}</span>
        <button onClick={decrement} data-testid="decrement-button">
          -
        </button>
      </div>
    </Fragment>
  );
};

export default Home;
