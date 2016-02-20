import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Item from '../components/item';
import Label from '../components/label';
import Loader from '../components/loader';

import {
  fetchAuctionById,
  getHighestBidder,
  placeBid,
  resetAuction,
  resetBidAuction,
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
    this.props.dispatch(resetBidAuction());
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
    } else if (detailAuction.history.length) {
      highestBidder = getHighestBidder(detailAuction.history, detailAuction.highestBidder);
    }

    if (highestBidder) {
      const itsCurrentBuyer = highestBidder.id === parseInt(this.props.params.buyerId, 10);
      const labelType = itsCurrentBuyer ? 'success' : 'warning';
      const labelText = itsCurrentBuyer ? 'It\'s you!' : 'It\'s not you.';

      return (
        <div>
          {`${highestBidder.name} `}
          <Label type={labelType}>
            {labelText}
          </Label>
        </div>
      );
    }

    return (
      <div>
        No bidder yet
      </div>
    );
  }

  renderBidButton ({ isPlacingBid }, { isFinished }) {
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
      return (
        <div className="container">
          <Loader />
        </div>
      );
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
        {this.renderBidButton(auctionBid, auctionDetail)}
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
