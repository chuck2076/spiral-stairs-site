/* eslint-disable react/jsx-no-target-blank */
// Links plus Social media Links and Spiral Name

import React from "react";


export default function Navbar({currentPage, setCurrentPage}){
    console.log("state = "+currentPage)
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundImage: 'url(images/Rainbow.jpg)', backgroundSize: '15%'}}>
 <a className="navbar-brand p-auto" href="/"><img src="images/SpiralStairs.png" alt="Spiral Stairs" width="100%" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
<ul className="navbar-nav ml-auto">
      <li id="home" className={currentPage === 'home' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="/"
        onClick={()=> setCurrentPage('home')}
        >Home <span className="sr-only">(current)</span></a>
      </li>
      <li id="tour" className={currentPage === 'tour' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="/tour" 
        onClick={()=> setCurrentPage('tour')}
        >Tour</a>
      </li>
      <li id="music" className={currentPage === 'music' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="/listen"
        onClick={()=> setCurrentPage('music')}
        >Listen</a>
      </li>
      <li id="videos" className={currentPage === 'videos' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="/watch"
        onClick={()=> setCurrentPage('videos')}
        >Watch</a>
      </li>
      <li id="merch" className={currentPage === 'merch' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="https://kf-merch.com/collections/spiral-stairs" target="_blank"
        onClick={()=> setCurrentPage('merch')}
        >Shop</a>
      </li>
      {/* <li id="contact" className={currentPage === 'contact' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('contact')}
        >Contact</a>
      </li> */}


      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
  </div>
</nav>
    )
};
