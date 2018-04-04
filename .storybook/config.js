import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Router } from 'react-router-dom';

import { history } from '../src/configureStore';

const req = require.context('../src/components', true, /stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <Router history={history}>
    {story()}
  </Router>
));

configure(loadStories, module);
