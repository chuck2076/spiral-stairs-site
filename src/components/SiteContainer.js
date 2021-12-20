// Page where we'll create the routes

import React from 'react';
import Home from './Home';
import Merch from './Merch';
import Music from './Music';
import Videos from './Videos';


const renderPage = ({currentPage}) => {
  if (currentPage === 'home') {
    return <Home />;
  } else if (currentPage === 'music') {
    return <Music />;
  } else if (currentPage === 'videos') {
    return <Videos />;
  } else if (currentPage === 'merch') {
    return <Merch />;
  }
};

export default renderPage;