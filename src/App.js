import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import SiteContainer from "./components/SiteContainer";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Music from './pages/Music'
import Tour from './pages/Tour'
import Videos from './pages/Videos'
import Merch from './pages/Merch'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <main style={{ background: "linear-gradient(#b82e1f, #000000)" }}>
      <Router>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/tour'>
          <Tour />
        </Route>
        <Route exact path='/listen'>
          <Music />
        </Route>
        <Route exact path='/watch'>
          <Videos />
        </Route>
        <Route exact path='/merch'>
          <Merch />
        </Route>
      </Router>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {/* <SiteContainer currentPage={currentPage}/> */}

      <Footer />
    </main>
  );
  }


