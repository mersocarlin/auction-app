import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Buyer from '../components/buyer';
import Loader from '../components/loader';


import { fetchBuyers } from '../actions/buyers';


class Home extends Component {
  static propTypes = {
    buyerList: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentWillMount () {
    this.props.dispatch(fetchBuyers());
  }

  handleBuyerClick (id) {
    this.props.history.push(`/auctions/${id}`);
  }

  renderBuyers ({ isFetching, buyers }) {
    if (isFetching) {
      return null;
    }

    return buyers.map((buyer) => {
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
    const { buyerList } = this.props;

    return (
      <div className="container">
        <h3>Choose your Buyer:</h3>
        <div className="row">
          {buyerList.isFetching && <Loader />}
          {this.renderBuyers(buyerList)}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    buyerList: state.buyerList,
  };
})(Home);
