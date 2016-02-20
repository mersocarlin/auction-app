import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render () {
    return (
      <div className="app">
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Hemerson Carlin - Auction App
            </a>
          </div>
        </div>
      </nav>
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps () {
  return {};
}


export default connect(mapStateToProps)(App);
