// Links plus Social media Links and Spiral Name

import React from "react";

export default function Navbar({currentPage, setCurrentPage}){
    console.log("state = "+currentPage)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-linear-gradient(#5e5368, #000000)">
 <a className="navbar-brand" href="#"><h1>Spinal Spiral Spirally</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li id="home" className={currentPage === 'home' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('home')}
        >Home <span className="sr-only">(current)</span></a>
      </li>
      <li id="tour" className={currentPage === 'tour' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('tour')}
        >Tour</a>
      </li>
      <li id="music" className={currentPage === 'music' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('music')}
        >Listen</a>
      </li>
      <li id="videos" className={currentPage === 'videos' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('videos')}
        >Watch</a>
      </li>
      <li id="merch" className={currentPage === 'merch' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('merch')}
        >Shop</a>
      </li>
      {/* <li id="contact" className={currentPage === 'contact' ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href="#"
        onClick={()=> setCurrentPage('contact')}
        >Contact</a>
      </li> */}

      <li className="nav-item">
        <a className="nav-link" href="https://twitter.com/spiralmusic"><img src="/images/3228543_app_b_w_logo_media_popular_icon.svg"></img>twitter</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.instagram.com/spiralstairsofficial/"><img src="/images/3228551_app_b_w_instagram_logo_media_icon.svg"></img>instagram</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.youtube.com/watch?v=FJ9tGhVk9j4"><img src="/images/3228540_app_b_w_logo_media_popular_icon.svg"></img>youtube</a>
      </li>
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
