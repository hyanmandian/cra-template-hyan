import React from 'react';
import { If } from 'react-extras';
import { bool } from 'prop-types';

const Loader = ({ show }) => (
  <If condition={show}>
    Loading...
  </If>
);

Loader.propTypes = {
  show: bool,
};

export default Loader;
