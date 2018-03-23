import React from 'react';
import { Link as ReLink } from 'react-router-dom';

const Link = ({ to, className, children }) => (
  <ReLink to={to} className={className}>{children}</ReLink>
);

Link.propTypes = ReLink.propTypes;

export default Link;
