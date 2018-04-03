import React from 'react';
import Helmet from 'react-helmet-async';
import { string, node } from 'prop-types';

const Head = ({
  title,
  description,
  image,
  children,
}) => (
  <Helmet titleTemplate="React Etalpreliob - %s">
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="og:image" content={image} />
    {children}
  </Helmet>
);

Head.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string,
  children: node,
};

export default Head;
