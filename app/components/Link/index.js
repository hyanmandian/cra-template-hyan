import React from 'react';
import { Link as ReLink } from 'react-router-dom';

import isInternal from 'utils/isInternal';

const Link = ({
  to,
  location,
  className,
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
