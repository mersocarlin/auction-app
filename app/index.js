import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './styles/app.scss';


const createHashHistory = require('history/lib/createHashHistory');


const history = createHashHistory({
  queryKey: false,
});


render(
  <Root history={history} />,
  document.getElementById('main')
);
