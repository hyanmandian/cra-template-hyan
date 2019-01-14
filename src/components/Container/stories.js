import React from "react";
import { storiesOf } from "@storybook/react";

import Container from "./";

storiesOf("Container", module)
  .add("default", () => (
    <Container>Put your content here :D</Container>
  ));
