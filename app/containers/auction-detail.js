import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Item from '../components/item';
import Loader from '../components/loader';

import {
  fetchAuctionById,
  getHighestBidder,
  placeBid,
  resetAuction,
} from '../actions/auctions';


class Auctions extends Component {
  static propTypes = {
    auctionBid: PropTypes.object.isRequired,
    auctionDetail: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  };

  componentWillMount () {
    const { dispatch, params } = this.props;

    dispatch(fetchAuctionById(params.auctionId));
  }

  componentWillUnmount () {
    this.props.dispatch(resetAuction());
  }

  handlePlaceBid () {
    const { auctionBid, dispatch, params } = this.props;

    if (auctionBid.isPlacingBid) {
      return;
    }

    dispatch(placeBid(params.auctionId, params.buyerId));
  }

  renderHighestBid ({ auction: bidAuction }, { auction: detailAuction }) {
    if (bidAuction) {
      return (
        <p>
          Highest Bid: {bidAuction.highestBid}
        </p>
      );
    }

    return (
      <p>
        Highest Bid: {detailAuction.highestBid}
      </p>
    );
  }

  renderHighestBidder ({ auction: bidAuction }, { auction: detailAuction }) {
    let highestBidder;

    if (bidAuction && bidAuction.history.length) {
      highestBidder = getHighestBidder(bidAuction.history, bidAuction.highestBidder);
    }

    if (detailAuction.history.length) {
      highestBidder = getHighestBidder(detailAuction.history, detailAuction.highestBidder);
    }

    if (highestBidder) {
      return (
        <div>
          {highestBidder.name}
        </div>
      );
    }

    return (
      <div>
        No bidder yet
      </div>
    );
  }

  renderBidButton ({ isFinished }, { isPlacingBid }) {
    if (isFinished) {
      return null;
    }

    return (
      <button className="btn btn-primary" onClick={::this.handlePlaceBid}>
        {isPlacingBid && <i className="fa fa-spinner fa-spin"></i>}
        Place Bid
      </button>
    );
  }

  render () {
    const { auctionBid, auctionDetail } = this.props;
    const { auction, isFetching } = auctionDetail;

    if (!auction || isFetching) {
      return <Loader />;
    }

    return (
      <div className="container">
        <Item item={auction.item} />

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Auction stats
            </h3>
          </div>
          <div className="panel-body">
            {this.renderHighestBid(auctionBid, auctionDetail)}
            {this.renderHighestBidder(auctionBid, auctionDetail)}
          </div>
        </div>
        {this.renderBidButton(auction, auctionBid)}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auctionBid: state.auctionBid,
    auctionDetail: state.auctionDetail,
  };
})(Auctions);
