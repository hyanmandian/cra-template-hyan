import React, { PureComponent, Fragment } from "react";

import { Meta } from "#/components/Meta";

export class ErrorBoundary extends PureComponent {
  state = { error: "" };

  componentDidCatch(error: Error) {
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) {
      return (
        <Fragment>
          <Meta title="Error" />
          Something went wrong.
        </Fragment>
      );
    }

    return this.props.children;
  }
}
