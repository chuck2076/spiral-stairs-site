// Links plus Social media Links and Spiral Name

import React from "react";

export default function Navbar({currentPage, handlePageChange}){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Spinal Spiral Spirally</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Listen</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Watch</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img src="/images/2515845_black and white_dark grey_facebook_icon.svg"></img>facebook</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img src="/images/3228543_app_b_w_logo_media_popular_icon.svg"></img>twitter</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img src="/images/3228551_app_b_w_instagram_logo_media_icon.svg"></img>instagram</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img src="/images/3228540_app_b_w_logo_media_popular_icon.svg"></img>youtube</a>
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
}