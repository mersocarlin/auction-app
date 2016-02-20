import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
  render () {
    return (
      <div>
        Wellcome to auction-app! ;)
      </div>
    );
  }
}

export default connect(() => {
  return { };
})(Home);
