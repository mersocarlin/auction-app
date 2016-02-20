import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render () {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps () {
  return {};
}


export default connect(mapStateToProps)(App);
