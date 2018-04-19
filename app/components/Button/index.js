import styled from 'styled-components';

export default styled.button`
  outline: 0;
  color: #41addd;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 10px 15px;
  display: inline-block;
  background-color: #fff;
  border: 2px solid #41addd;

  &:active, &:hover {
    background: #41addd;
    color: #fff;
  }
`;
