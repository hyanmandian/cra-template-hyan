import React, { PureComponent } from 'react';
import { If } from 'react-extras';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';

class Home extends PureComponent {
  componentDidMount() {
    this.props.actions.onFetchDog();
  }

  render() {
    const { app, dogs, counter, actions } = this.props;

    return (
      <div>
        <Loader show={app.loading} />
        <button onClick={actions.onDecrement}>-</button>
        <strong>{ counter.value }</strong>
        <button onClick={actions.onIncrement}>+</button>
        <If condition={dogs.image}>
          <img alt="Dog" src={ dogs.image } />
        </If>
      </div>
    );
  }
}

const mapState = ({ app, dogs, counter }) => ({
  app,
  counter,
  dogs,
});

const mapDispatch = ({ dogs, counter }) => ({
  actions: {
    onIncrement: counter.increment,
    onDecrement: counter.decrement,
    onFetchDog: dogs.fetch,
  },
});

export default connect(mapState, mapDispatch)(Home);
