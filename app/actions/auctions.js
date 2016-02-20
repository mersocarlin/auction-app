import * as api from '../api/auctions';

export const AUCTIONS_REQUEST = 'AUCTIONS_REQUEST';
export const AUCTIONS_SUCCESS = 'AUCTIONS_SUCCESS';
export const AUCTIONS_FAILURE = 'AUCTIONS_FAILURE';

export const DETAIL_AUCTION_REQUEST = 'DETAIL_AUCTION_REQUEST';
export const DETAIL_AUCTION_SUCCESS = 'DETAIL_AUCTION_SUCCESS';
export const DETAIL_AUCTION_FAILURE = 'DETAIL_AUCTION_FAILURE';
export const DETAIL_AUCTION_RESET = 'DETAIL_AUCTION_RESET';

export const PLACE_BID_REQUEST = 'PLACE_BID_REQUEST';
export const PLACE_BID_SUCCESS = 'PLACE_BID_SUCCESS';
export const PLACE_BID_FAILURE = 'PLACE_BID_FAILURE';
export const RESET_BID_AUCTION = 'RESET_BID_AUCTION';


export function fetchAuctions () {
  return (dispatch) => {
    return dispatch(_fetchAuctions());
  };
}

export function fetchAuctionById (id) {
  return (dispatch) => {
    return dispatch(_fetchAuctionById(id));
  };
}

export function placeBid (auctionId, buyerId) {
  return (dispatch) => {
    return dispatch(_placeBid(auctionId, buyerId));
  };
}

export function resetAuction () {
  return { type: DETAIL_AUCTION_RESET };
}

export function resetBidAuction () {
  return { type: RESET_BID_AUCTION };
}

export function getHighestBidder (historyList, highestBidderId) {
  const highestBidder = historyList
    .find(history =>
      history.buyer &&
      history.buyer.id &&
      history.buyer.id === highestBidderId
    );

  if (highestBidder) {
    return highestBidder.buyer;
  }

  return {
    name: 'None',
  };
}


function _fetchAuctions () {
  return async dispatch => {
    dispatch({ type: AUCTIONS_REQUEST });
    try {
      const data = await api.fetchAuctions();
      dispatch({ type: AUCTIONS_SUCCESS, data });
    } catch (error) {
      dispatch({ type: AUCTIONS_FAILURE, error });
    }
  };
}


function _fetchAuctionById (id) {
  return async dispatch => {
    dispatch({ type: DETAIL_AUCTION_REQUEST });
    try {
      const data = await api.fetchAuctionById(id);
      dispatch({ type: DETAIL_AUCTION_SUCCESS, data });
    } catch (error) {
      dispatch({ type: DETAIL_AUCTION_FAILURE, error });
    }
  };
}


function _placeBid (auctionId, buyerId) {
  return async dispatch => {
    dispatch({ type: PLACE_BID_REQUEST });
    try {
      const data = await api.placeBid(auctionId, buyerId);
      dispatch({ type: PLACE_BID_SUCCESS, data });
    } catch (error) {
      dispatch({ type: PLACE_BID_FAILURE, error });
    }
  };
}
