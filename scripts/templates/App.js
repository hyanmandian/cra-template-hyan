import React, { Fragment } from 'react';
import { node } from 'prop-types';

const App = ({ children }) => (
  <Fragment>{ children }</Fragment>
);

App.propTypes = {
  children: node.isRequired,
};

export default App;
