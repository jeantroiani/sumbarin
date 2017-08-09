import ReactDOM from 'react-dom';
import React from 'react';
import '../style/less/style.less';
import '../fonts/Rounded.less';
import Home from '../modules/Home/Home.js';
import Routes from '../routes/routes';
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);