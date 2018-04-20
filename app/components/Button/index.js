import { darken } from 'polished';
import styled from 'styled-components';

export default styled.button`
  outline: 0;
  color: ${({ theme }) => theme.color.pictonBlue};
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 10px 15px;
  display: inline-block;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.color.pictonBlue};

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.color.pictonBlue};
  }

  &:active {
    border-color: ${({ theme }) => darken(0.1, theme.color.pictonBlue)};
    background-color: ${({ theme }) => darken(0.1, theme.color.pictonBlue)};
  }
`;
