import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Music from './pages/Music'
import Tour from './pages/Tour'
import Videos from './pages/Videos'
import Merch from './pages/Merch'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <main style={{ backgroundImage: "url( /images/BlueBackground.jpg)", backgroundSize: "100%" }}>
      <BrowserRouter>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
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


