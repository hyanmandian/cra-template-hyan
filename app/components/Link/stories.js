import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Link from './';

const description = "Abstraction to work with links. If an internal route is passed, the component will use the RouterLink component, otherwise it'll fallback to an anchor tag.";

storiesOf('Link', module)
  .add('Internal', withInfo(description)(() => (
    <Link to="/example">Internal</Link>
  )))
  .add('External', withInfo(description)(() => (
    <Link to="http://www.example.com">External</Link>
  )));
