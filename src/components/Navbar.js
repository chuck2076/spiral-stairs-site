
// Links plus Social media Links and Spiral Name

import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar({currentPage, setCurrentPage}){
    console.log("state = "+currentPage)
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundImage: 'url(images/Rainbow.jpg)', backgroundSize: '15%'}}>
 <a className="navbar-brand" style={{margin: 0, padding: 0}} href="/"><img src="images/SpiralStairs.png" alt="Spiral Stairs" width="80%" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
      
<div style={{marginRight: '100%'}}>
  <NavLink exact={true} activeClassName='is-active' to='/listen' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2.5em'
  })}>Listen&nbsp;</NavLink>
   
  <NavLink exact={true} activeClassName='is-active' to='/watch' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2.5em'
  })}>Watch&nbsp;</NavLink>
    
  <a style={{
    color: '#545e6f', fontSize: '2.5em'
  }} href="https://kf-merch.com/collections/spiral-stairs" target="_blank" rel="noreferrer"
        onClick={()=> setCurrentPage('merch') }
        >Shop</a>
     </div> 
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

  </div>
</nav>
    )
};
