import React, { Fragment } from "react";

export type Props = {
  show: boolean;
};

export const Loader: React.FC<Props> = ({ show }) => {
  return <Fragment>{show && "Loading..."}</Fragment>;
};

Loader.defaultProps = {
  show: false
};
