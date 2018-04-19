import { configure } from '@storybook/react';

function loadStories() {
  require('./stories'); // eslint-disable-line
}

configure(loadStories, module);
