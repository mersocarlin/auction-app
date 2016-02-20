import React, { Component, PropTypes } from 'react';


export default class Auction extends Component {
  static propTypes = {
    auction: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render () {
    const { auction, onClick } = this.props;

    return (
      <div className="auction-component" onClick={() => onClick(auction.id)}>
        <p>
          Bid Step: {auction.bidStep}
        </p>
        <p>
          Finished: {auction.isFinished}
        </p>
        <p>
          Item: {auction.item.name}
        </p>
        <p>
          Starting price: {auction.item.startingPrice}
        </p>
        <p>
          HighestBid: {auction.highestBid}
        </p>
        <p>
          HighestBidder: {auction.highestBidder}
        </p>
      </div>
    );
  }
}
