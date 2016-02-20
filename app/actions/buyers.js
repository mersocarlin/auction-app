import * as api from '../api/buyers';

export const BUYERS_REQUEST = 'BUYERS_REQUEST';
export const BUYERS_SUCCESS = 'BUYERS_SUCCESS';
export const BUYERS_FAILURE = 'BUYERS_FAILURE';


export function fetchBuyers () {
  return (dispatch) => {
    return dispatch(_fetchBuyers());
  };
}


function _fetchBuyers () {
  return async dispatch => {
    dispatch({ type: BUYERS_REQUEST });
    try {
      const data = await api.fetchBuyers();
      dispatch({ type: BUYERS_SUCCESS, data });
    } catch (error) {
      dispatch({ type: BUYERS_FAILURE, error });
    }
  };
}
