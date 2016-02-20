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

  render () {
    const buyersList = [
      { id: 1, name: 'Buyer 1' },
      { id: 2, name: 'Buyer 2' },
    ];

    const buyers = buyersList
      .map((buyer) => {
        return (
          <Buyer
            key={buyer.id}
            buyer={buyer}
            onClick={::this.handleBuyerClick}
          />
        );
      });

    return (
      <div>
        Choose your Buyer:
        {buyers}
      </div>
    );
  }
}

export default connect(() => {
  return { };
})(Home);
