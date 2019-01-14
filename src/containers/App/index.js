import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { node } from 'prop-types';

import Routes from '#/routes';
import Head from '#/components/Head';
import GlobalStyle from '#/components/GlobalStyle';

export function App() {
  return (
    <Fragment>
      <Head titleTemplate="%s - React Etalpreliob" defaultTitle="React Etalpreliob" />
      <GlobalStyle />
      <main>
        <Routes />
      </main>
    </Fragment>
  );
}

App.propTypes = {
  children: node,
};

export default hot(module)(App);
