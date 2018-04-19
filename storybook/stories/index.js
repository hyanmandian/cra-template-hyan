import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../app/components/Button';

storiesOf('Button', module)
  .add('default styles', () => (
    <Button>Hello World</Button>
  ));
