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