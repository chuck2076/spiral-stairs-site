// Page where we'll create the routes

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Merch from './components/Merch';
import Music from './components/Music';
import Videos from './components/Videos';


export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Music') {
      return <Music />;
    }
    if (currentPage === 'Videos') {
      return <Videos />;
    }
    if (currentPage === 'Merch') {
      return <Merch />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     {/* We are passing the currentPage from state and the function to update it */}
     <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
     {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
};