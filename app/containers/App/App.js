import React from 'react';
import { Helmet } from 'react-helmet';
// import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Footer />
  </div>
);

export default App;
