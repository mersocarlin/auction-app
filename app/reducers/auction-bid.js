import {
  PLACE_BID_REQUEST,
  PLACE_BID_SUCCESS,
  PLACE_BID_FAILURE,
  RESET_BID_AUCTION,
} from '../actions/auctions';


const INITIAL_STATE = {
  isPlacingBid: false,
  auction: null,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLACE_BID_REQUEST:
      return {
        ...state,
        isPlacingBid: true,
        error: null,
      };
    case PLACE_BID_SUCCESS:
      return {
        ...state,
        isPlacingBid: false,
        auction: action.data,
      };
    case PLACE_BID_FAILURE:
      return {
        ...state,
        isPlacingBid: false,
        error: action.error,
      };
    case RESET_BID_AUCTION:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
