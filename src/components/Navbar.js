// Links plus Social media Links and Spiral Name

//import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'



const NewNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="md" style={{backgroundImage: 'url(images/Rainbow.jpg)', backgroundSize: 'cover'}}>
 <Navbar.Brand style={{margin: 0, padding: 0}} href="/"><img src="images/SpiralStairs.png" alt="Spiral Stairs" width="80%"/></Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" className = "custom-toggler"  />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse">
   
        
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/listen' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2em'
  })}>Listen&nbsp;</NavLink>
   
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/watch' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2em'
  })}>Watch&nbsp;</NavLink>
  
  <div className="nav-item">
    <a data-toggle="collapse" data-target="#navbarCollapse" href="https://spiralstairspsoi.bandcamp.com/" className="nav-link" target="_blank" rel="noreferrer" style={{
    color: '#545e6f', fontSize: '2em'
  }} >Bandcamp&nbsp;</a></div>
  <div className="nav-item">
    <a data-toggle="collapse" data-target="#navbarCollapse" href="https://pavementband.com/" className="nav-link" target="_blank" rel="noreferrer" style={{
    color: '#545e6f', fontSize: '2em'
  }} >Pavement</a></div>

      
     </Navbar.Collapse> 

</Navbar>
    )
}

export default NewNavbar