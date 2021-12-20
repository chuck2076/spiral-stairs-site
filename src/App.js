import React, {useState} from "react";
import './App.css';
import Footer from "./components/Footer";
import SiteContainer from "./SiteContainer";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <main style={{ background: "linear-gradient(#e66465, #9198e5)" }}>

      <SiteContainer currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Footer />
    </main>
  );
  }


