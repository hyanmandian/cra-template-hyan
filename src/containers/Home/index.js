import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';

export class Home extends PureComponent {
  handleClick = async () => {
    await this.props.dispatch.count.incrementAsync();
  }

  render() {
    const { value } = this.props.count;

    return (
      <Container>
        Hello :D <br />
        <button onClick={this.handleClick}>+</button> {value}
      </Container>
    );
  }
}

const mapState = state => ({ count: state.count });

const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Home);
