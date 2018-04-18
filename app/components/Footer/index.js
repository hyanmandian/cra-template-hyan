import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
  a {
    color: #41addd;
    &:hover {
      color: #6cc0e5;
    }
  }
`;

export default function AppFooter() {
  return (
    <Footer>
      <section>This project is licensed under the MIT license.</section>
      <section>Made with <span role="img" aria-label="heart-emoji">❤️</span> by <a href="#">...</a></section>
    </Footer>
  );
}
