import React from 'react';
import { Route } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import NoMatch from './containers/no-match';


export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
