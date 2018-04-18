import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Banner from './images/banner.jpg';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="https://twitter.com/flexdinesh">
          <img src={Banner} alt="react-redux-boilerplate - Logo" />
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link>
          Current count: {this.props.counter.value}
          <button type="button" onClick={this.props.onIncrement}>
            Click me to increase
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  counter: PropTypes.node.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

const mapState = ({ counter }) => ({ counter });

const mapDispatch = ({ counter }) => ({
  onIncrement: () => counter.increment(),
});

export default connect(mapState, mapDispatch)(Header);
