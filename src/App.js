import React, { useState } from "react";
import './App.css';
import Footer from "./components/Footer";
import SiteContainer from "./components/SiteContainer";
import Navbar from "./components/Navbar";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <main style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <SiteContainer currentPage={currentPage}/>
      <Footer />
    </main>
  );
  }


