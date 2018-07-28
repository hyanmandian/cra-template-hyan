import React from 'react';
import { node } from 'prop-types';

export default function App({ children }) {
  return (
    <main>
      {children}
    </main>
  );
};

App.propTypes = {
  children: node,
};
