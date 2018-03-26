import React, { PureComponent } from 'react';
import { object, bool } from 'prop-types';
import { connect } from 'react-redux';

import Container from '../../components/Container';

class Home extends PureComponent {
  static propTypes = {
    dogs: object.isRequired,
    actions: object.isRequired,
    loading: bool.isRequired,
    counter: object.isRequired,
  };

  componentDidMount() {
    this.props.actions.onFetchDog();
  }

  render() {
    const {
      loading,
      dogs,
      counter,
      actions,
    } = this.props;

    return (
      <Container>
        <Choose>
          <When condition={loading}>
            <strong>Loading</strong>
          </When>
          <Otherwise>
            <button onClick={actions.onDecrement}>-</button>
            <strong>{ counter.value }</strong>
            <button onClick={actions.onIncrement}>+</button>
            <img alt="Dog" src={dogs.image} />
          </Otherwise>
        </Choose>
      </Container>
    );
  }
}

const mapState = ({ app, dogs, counter }) => ({
  loading: app.loading,
  dogs,
  counter,
});

const mapDispatch = ({ dogs, counter }) => ({
  actions: {
    onIncrement: () => counter.increment(),
    onDecrement: () => counter.decrement(),
    onFetchDog: () => dogs.fetch(),
  },
});

export default connect(mapState, mapDispatch)(Home);
