import React from 'react';
import { Link as ReLink } from 'react-router-dom';

const isInternal = url => /^\/(?!\/)/.test(url);

const Link = ({
  to,
  className,
  location,
  children,
}) => (
  <Choose>
    <When condition={isInternal(to)}>
      <ReLink location={location} to={to} className={className}>{children}</ReLink>
    </When>
    <Otherwise>
      <a href={to} className={className}>{children}</a>
    </Otherwise>
  </Choose>
);

Link.propTypes = ReLink.propTypes;

export default Link;
