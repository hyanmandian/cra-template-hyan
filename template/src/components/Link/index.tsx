import React from "react";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";

export type Props = Omit<LinkProps, "component"> & {
  as?: React.ComponentType<any>;
  to: string;
};

const Anchor: React.FC<Props> = ({ as: Component = "a", to, onClick, ...props }) => {
  const handleClick: Props["onClick"] = (event) => {
    /* istanbul ignore else */
    if (process.env.NODE_ENV === "test") {
      // fix jest issue: https://github.com/facebook/jest/issues/890
      Object.defineProperty(window.location, "href", { value: to });
    }

    onClick && onClick(event);
  };

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <Component href={to} onClick={handleClick} {...props} />;
};

export const Link: React.FC<Props> = ({ as, ...props }) => {
  const isExternal = /^https?:\/\//.test(props.to);

  return isExternal ? (
    <Anchor as={as} {...props} />
  ) : (
    <ReactRouterLink component={as} {...props} />
  );
};
