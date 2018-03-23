import React, { Fragment } from 'react';
import Header from './Header';
import Main from './Main';

const App = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{ children }</Main>
  </Fragment>
);

export default App;
