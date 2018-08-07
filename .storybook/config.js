import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import withBackgrounds from '@storybook/addon-backgrounds';
import { ThemeProvider } from 'styled-components';

import './styles.css';

import { theme } from '../src/globalStyles';

const req = require.context('../src/components', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withBackgrounds([
    {
      name: 'Pattern',
      value:
        'repeating-linear-gradient(0deg,transparent,transparent 7px,rgba(0,0,0,.2) 1px,transparent 8px),repeating-linear-gradient(90deg,transparent,transparent 7px,rgba(0,0,0,.2) 1px,transparent 8px)',
      default: true,
    },
    { name: 'Bright', value: '#FFF' },
    { name: 'Dark', value: '#000' },
  ])
);

addDecorator(story => (
  <div className="storybook-content">
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </div>
));

configure(loadStories, module);
