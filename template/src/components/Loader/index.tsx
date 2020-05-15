import React from "react";

export type Props = {
  show: boolean;
};

export const Loader: React.FC<Props> = ({ show = false, ...props }) => {
  return (
    <div style={{ display: show ? "block" : "none" }} {...props}>
      Loading
    </div>
  );
};
