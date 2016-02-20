import {
  DETAIL_AUCTION_REQUEST,
  DETAIL_AUCTION_SUCCESS,
  DETAIL_AUCTION_FAILURE,
  DETAIL_AUCTION_RESET,
} from '../actions/auctions';


const INITIAL_STATE = {
  isFetching: false,
  auction: null,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL_AUCTION_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case DETAIL_AUCTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        auction: action.data,
      };
    case DETAIL_AUCTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case DETAIL_AUCTION_RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
