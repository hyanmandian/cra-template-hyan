import { darken } from 'polished';
import styled from 'styled-components';

const buttonColor = '#41addd';

export default styled.button`
  outline: 0;
  color: ${buttonColor};
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 10px 15px;
  display: inline-block;
  background-color: #fff;
  border: 2px solid ${buttonColor};

  &:hover {
    color: #fff;
    background-color: ${buttonColor};
  }

  &:active {
    border-color: ${darken(0.1, buttonColor)};
    background-color: ${darken(0.1, buttonColor)};
  }
`;
