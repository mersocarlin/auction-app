import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoMatch extends Component {
  render () {
    return (
      <div>
        Not Found!
      </div>
    );
  }
}


export default connect(() => {
  return { };
})(NoMatch);
