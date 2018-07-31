import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Container from '@/components/Container';
import Head from '@/components/Head';

export class Home extends PureComponent {
  handleClick = async () => {
    await this.props.dispatch.count.incrementAsync();
  };

  render() {
    const { value } = this.props.count;

    return (
      <Container>
        <Head title="Home" />
        Hello :D <br />
        <button onClick={this.handleClick}>+</button> {value}
      </Container>
    );
  }
}

const mapState = state => ({ count: state.count });

const mapDispatch = dispatch => ({ dispatch });

export default connect(
  mapState,
  mapDispatch
)(Home);
