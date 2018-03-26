import React, { Fragment } from 'react';
import { node } from 'prop-types';

import Header from './Header';
import Main from './Main';

const App = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{ children }</Main>
  </Fragment>
);

App.propTypes = {
  children: node.isRequired,
};

export default App;
