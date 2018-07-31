import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import './styles.css';

import { theme } from '../src/globalStyles';

const req = require.context('../src/components', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div className="storybook-content">
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </div>
));

configure(loadStories, module);
