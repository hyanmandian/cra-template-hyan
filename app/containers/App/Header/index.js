import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from 'components/Button';

const HeaderContainer = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

HeaderContainer.Header = styled.header`
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

HeaderContainer.Content = styled.main`
  *:not(:last-child) {
    margin-right: 10px;
  }
`;

const Counter = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
`;

const Header = (props) => (
  <HeaderContainer>
    <HeaderContainer.Header>
      <Counter>Current count is: {props.counter.value}</Counter>
    </HeaderContainer.Header>
    <HeaderContainer.Content>
      <Button onClick={props.onIncrement}>
        Increase by 1
      </Button>
      <Button onClick={props.onDecrement}>
        Decrease by 1
      </Button>
    </HeaderContainer.Content>
  </HeaderContainer>
);

Header.propTypes = {
  counter: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

const mapState = ({ counter }) => ({ counter });

const mapDispatch = ({ counter }) => ({
  onIncrement: () => counter.increment(),
  onDecrement: () => counter.decrement(),
});

export default connect(mapState, mapDispatch)(Header);
