
// Links plus Social media Links and Spiral Name

//import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light" style={{backgroundImage: 'url(images/Rainbow.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
 <a className="navbar-brand" style={{margin: 0, padding: 0}} href="/"><img src="images/SpiralStairs.png" alt="Spiral Stairs" width="80%"/></a>
 <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/listen' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2em'
  })}>Listen&nbsp;|</NavLink>
   </li>
   <li className="nav-item">
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/watch' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2em'
  })}>Watch&nbsp;|</NavLink>
    </li>
  <li className="nav-item">
    <a data-toggle="collapse" data-target="#navbarCollapse" href="https://spiralstairs.bandcamp.com/" className="nav-link" target="_blank" rel="noreferrer" style={{
    color: '#545e6f', fontSize: '2em'
  }} >Bandcamp&nbsp;|</a></li>
  <li className="nav-item">
    <a data-toggle="collapse" data-target="#navbarCollapse" href="https://pavementband.com/" className="nav-link" target="_blank" rel="noreferrer" style={{
    color: '#545e6f', fontSize: '2em'
  }} >Pavement</a></li>

        </ul>
     </div> 

</nav>
    )
}

export default Navbar
