import React, { Fragment }from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Link from './';

storiesOf('Link', module)
  .add('Default', withInfo(`
    Abstraction to work with links.If an internal route is passed, the component will use the RouterLink component, otherwise it'll fallback to an anchor tag.
  `)(() => (
    <Fragment>
      <Link to="/example">Internal</Link>
      <Link to="http://www.example.com">External</Link>
    </Fragment>
  )));
