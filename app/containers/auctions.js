import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Auction from '../components/auction';
import Loader from '../components/loader';

import { fetchAuctions } from '../actions/auctions';


class Auctions extends Component {
  static propTypes = {
    auctionList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  };

  componentWillMount () {
    this.props.dispatch(fetchAuctions());
  }

  handleAuctionClick (auctionId) {
    const { history, params } = this.props;

    history.push(`/auctions/detail/${params.buyerId}/${auctionId}`);
  }

  renderAuctions ({ auctions }) {
    return auctions
      .map(auction => {
        return (
          <div key={auction.id} className="col-xs-6">
            <Auction
              auction={auction}
              onClick={::this.handleAuctionClick}
            />
          </div>
        );
      });
  }

  render () {
    const { auctionList } = this.props;

    if (auctionList.isFetching) {
      return <Loader />;
    }

    return (
      <div className="container">
        {this.renderAuctions(auctionList)}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auctionList: state.auctionList,
  };
})(Auctions);
