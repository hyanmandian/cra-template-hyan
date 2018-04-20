import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import { history } from '../app/configureStore';
import { theme } from '../app/globalStyles';

const req = require.context('../app/components', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      {story()}
    </Router>
  </ThemeProvider>
));

configure(loadStories, module);
