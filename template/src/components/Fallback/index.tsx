import React from "react";

import { Meta } from "#/components/Meta";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export const Fallback: React.FC<Props> = (props) => (
  <div data-testid="error-boundary-fallback" {...props}>
    <Meta title="Error" />
    Something went wrong.
  </div>
);
