import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

export function story(children, config = {}) {
  return withInfo(config)(() => children);
}

export function of(name, stories) {
  const intance = storiesOf(name, module);

  Object.keys(stories).forEach(key => {
    intance.add(key, story(stories[key]));
  });

  return intance;
}
