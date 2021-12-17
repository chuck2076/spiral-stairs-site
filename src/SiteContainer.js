// Page where we'll create the routes

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Merch from './components/Merch';
import Music from './components/Music';
import Videos from './components/Videos';


export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'music') {
      return <Music />;
    }
    if (currentPage === 'videos') {
      return <Videos />;
    }
    if (currentPage === 'merch') {
      return <Merch />;
    }
  };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     {/* We are passing the currentPage from state and the function to update it */}
     <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
     {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
};