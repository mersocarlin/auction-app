import {
  AUCTIONS_REQUEST,
  AUCTIONS_SUCCESS,
  AUCTIONS_FAILURE,
} from '../actions/auctions';


const INITIAL_STATE = {
  auctions: [],
  isFetching: false,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUCTIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case AUCTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        auctions: action.data,
      };
    case AUCTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
