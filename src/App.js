// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";
import NewNavbar from "./components/Navbar";
import Home from './components/Home';
import Music from './pages/Music'
import Tour from './pages/Tour'
import Videos from './pages/Videos'
import Merch from './pages/Merch'

export default function App() {
//  const [currentPage, setCurrentPage] = useState('home');
  return (
    <main>
      <BrowserRouter>
      <NewNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/tour' element={<Tour />}></Route>
          <Route path='/listen' element={<Music />}></Route>
          <Route path='/watch' element={<Videos />}></Route>
          <Route path='/merch' element={<Merch />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}


