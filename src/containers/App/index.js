import React, { Fragment } from 'react';
import { node } from 'prop-types';

import Head from '@/components/Head';
import GlobalStyle from '@/components/GlobalStyle';

export default function App({ children }) {
  return (
    <Fragment>
      <Head titleTemplate="%s - React Etalpreliob" defaultTitle="React Etalpreliob"/>
      <GlobalStyle />
      <main>{children}</main>
    </Fragment>
  );
}

App.propTypes = {
  children: node,
};
