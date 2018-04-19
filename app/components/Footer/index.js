import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid #ccc;
  a {
    color: #41addd;
    &:hover {
      color: #6cc0e5;
    }
  }
`;

const Footer = () => {
  return (
    <AppFooter>
      <section>This project is licensed under the MIT license.</section>
    </AppFooter>
  );
};

Footer.displayName = 'Footer';

export default Footer;
