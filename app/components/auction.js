import React, { Component, PropTypes } from 'react';

import { getHighestBidder } from '../actions/auctions';

export default class Auction extends Component {
  static propTypes = {
    auction: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render () {
    const { auction, onClick } = this.props;
    const highestBidder = getHighestBidder(auction.history, auction.highestBidder);

    return (
      <div className="auction-component" onClick={() => onClick(auction.id)}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {auction.item.name}
            </h3>
          </div>
          <div className="panel-body">
            <p>
              Starting at: {auction.item.startingPrice}
            </p>
            <p>
              Highest Bid: {auction.highestBid}
            </p>
            <p>
              Bid Step: {auction.bidStep}
            </p>
            <p>
              Finished: {auction.isFinished ? 'yes' : 'no'}
            </p>
            <p>
              HighestBidder: {highestBidder.name}
            </p>
            <p>
              Total Bids: {auction.history.length}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
