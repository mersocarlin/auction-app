import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Item from '../components/item';
import Loader from '../components/loader';

import { fetchAuctionById, placeBid } from '../actions/auctions';


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
    const getHighestBidderName = (historyList, highestBidder) => {
      return historyList
        .find(history =>
          history.buyer.id &&
          history.buyer.id === highestBidder
        );
    };

    let highestBidder;

    if (bidAuction && bidAuction.history.length) {
      highestBidder = getHighestBidderName(bidAuction.history, bidAuction.highestBidder);
      return (
        <div>
          From bid: {highestBidder.buyer.name}
        </div>
      );
    }

    if (detailAuction.history.length) {
      highestBidder = getHighestBidderName(detailAuction.history, detailAuction.highestBidder);

      return (
        <div>
          From detail: {highestBidder.buyer.name}
        </div>
      );
    }

    return (
      <div>
        No bidder yet
      </div>
    );
  }

  render () {
    const { auctionBid, auctionDetail } = this.props;
    const { auction, isFetching } = auctionDetail;

    if (!auction || isFetching) {
      return <Loader />;
    }

    return (
      <div>
        <p>Auction Detail container</p>
        <Item item={auction.item} />
        {this.renderHighestBid(auctionBid, auctionDetail)}
        {this.renderHighestBidder(auctionBid, auctionDetail)}
        <button onClick={::this.handlePlaceBid}>Place Bid</button>
        { auctionBid.isPlacingBid && <div>placing bid...</div>}
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
