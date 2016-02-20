import { combineReducers } from 'redux';

import auctionBid from './auction-bid';
import auctionDetail from './auction-detail';
import auctionList from './auction-list';

const rootReducer = combineReducers({
  auctionBid,
  auctionDetail,
  auctionList,
});


export default rootReducer;
