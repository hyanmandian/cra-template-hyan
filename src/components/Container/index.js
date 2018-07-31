import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.gutter};
`;

export default Container;
