import React from 'react';
import { Route } from 'react-router';

import App from './containers/app';
import AuctionDetail from './containers/auction-detail';
import Auctions from './containers/auctions';
import Home from './containers/home';
import NoMatch from './containers/no-match';


export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/auctions/:buyerId" component={Auctions} />
    <Route path="/auctions/detail/:buyerId/:auctionId" component={AuctionDetail} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
