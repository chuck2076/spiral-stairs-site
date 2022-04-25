// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";
import NewNavbar from "./components/Navbar";
import Home from './components/Home';
import Music from './components/Music';
import Videos from './components/Videos';


console.log(`%cDeveloped By`, '🐦;background: rgb(190 170 140); color: #444; padding: 3px; border-radius: 5px;');
console.log(`     %cChuck Stephens: https://github.com/chuck2076`, '🐦;background: lightblue; color: #444; padding: 3px; border-radius: 5px;');
console.log(`     %cMat Lundin: https://github.com/mat-lundin`, '🐦;background: lightblue; color: #444; padding: 3px; border-radius: 5px;');
export default function App() {

  return (
    <main>
      <BrowserRouter>
      <NewNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/listen' element={<Music />}></Route>
          <Route path='/watch' element={<Videos />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}


