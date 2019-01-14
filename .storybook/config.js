import { configure, addDecorator } from '@storybook/react';
import withBackgrounds from '@storybook/addon-backgrounds';

const req = require.context('../src/components', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withBackgrounds([
    { name: 'Light', value: '#FFF' },
    { name: 'Dark', value: '#000' },
  ])
);

configure(loadStories, module);
