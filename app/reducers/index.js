import { combineReducers } from 'redux';

import auctionBid from './auction-bid';
import auctionDetail from './auction-detail';
import auctionList from './auction-list';
import buyerList from './buyer-list';


const rootReducer = combineReducers({
  auctionBid,
  auctionDetail,
  auctionList,
  buyerList,
});


export default rootReducer;
