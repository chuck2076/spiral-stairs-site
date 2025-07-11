// Links plus Social media Links and Spiral Name

//import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'



const NewNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg navbar-light custom-navbar">
 <Navbar.Brand className="custom-navbar-brand" href="/"><img src="images/SpiralStairs.png" alt="Spiral Stairs" /></Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse">
   
        
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link custom-nav-link" activeclassname="true" to='/listen'>Listen&nbsp;</NavLink>
   
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link custom-nav-link" activeclassname="true" to='/watch'>Watch&nbsp;</NavLink>
  
  <div className="nav-item">
    <a data-toggle="collapse" data-target="#navbarCollapse" href="https://spiralstairspsoi.bandcamp.com/" className="nav-link custom-nav-link" target="_blank" rel="noreferrer">Bandcamp&nbsp;</a></div>
  <div className="nav-item">
    <a data-toggle="collapse" data-target="#navbarCollapse" href="https://pavementband.com/" className="nav-link custom-nav-link" target="_blank" rel="noreferrer">Pavement</a></div>

      
     </Navbar.Collapse> 

</Navbar>
    )
}

export default NewNavbar