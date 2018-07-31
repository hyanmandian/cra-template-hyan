import React from 'react';
import { string } from 'prop-types';
import Helmet from 'react-helmet-async';

export default function Head({ title, description, ...props }) {
  return (
    <Helmet {...props}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

Head.defaultProps = {
  title: '',
  description: '',
};

Head.propTypes = {
  title: string,
  description: string,
  ...Helmet.propTypes,
};
