import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Buyer from '../components/buyer';


class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  handleBuyerClick (id) {
    this.props.history.push(`/auctions/${id}`);
  }

  renderBuyers () {
    const buyersList = [
      { id: 1, name: 'Buyer 1' },
      { id: 2, name: 'Buyer 2' },
    ];

    return buyersList.map((buyer) => {
      return (
        <div key={buyer.id} className="col-xs-6">
          <Buyer
            buyer={buyer}
            onClick={::this.handleBuyerClick}
          />
        </div>
      );
    });
  }

  render () {
    return (
      <div className="container">
        <h3>Choose your Buyer:</h3>
        <div className="row">
          {this.renderBuyers()}
        </div>
      </div>
    );
  }
}

export default connect(() => {
  return { };
})(Home);
