import {
  BUYERS_REQUEST,
  BUYERS_SUCCESS,
  BUYERS_FAILURE,
} from '../actions/buyers';


const INITIAL_STATE = {
  buyers: [],
  isFetching: false,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUYERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case BUYERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        buyers: action.data,
      };
    case BUYERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
