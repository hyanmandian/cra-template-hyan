import React, { Fragment } from "react";
import {
  ErrorBoundaryPropsWithFallback,
  ErrorBoundary as ReactErrorBoundary,
} from "react-error-boundary";
import { Optional } from "utility-types";

import { Meta } from "#/components/Meta";

export const Fallback: React.FC = () => {
  return (
    <Fragment>
      <Meta title="Error" />
      Something went wrong.
    </Fragment>
  );
};

export const ErrorBoundary: React.FC<Optional<
  ErrorBoundaryPropsWithFallback,
  "fallback"
>> = (props) => {
  return <ReactErrorBoundary fallback={<Fallback />} {...props} />;
};
