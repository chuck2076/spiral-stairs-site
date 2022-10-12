//This is the latest news, album releases, and other updates.

import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Home(){
    return(
    <Container flex="true">
        <Row className="mt-5">
            <Col xs={6} md={6} className="justify-space-between">
        <Link flex="true" to="https://spiralstairspsoi.bandcamp.com/">
        <div className="cliptwo">New Album</div><h2 className="clip">Medley Attack!!!</h2><div className="cliptwo">July 08 2022</div>
        </Link>
        </Col>
            <Col xs={6} md={6} className="justify-space-between">
        <Link to="https://spiralstairspsoi.bandcamp.com/" className="cliptwo ml-5">Order Now<img className="preorder" src="images/ElBuen.png" width="25%" alt="el buen" /></Link>
        </Col>
        </Row>
        <Row className= "mt-3" flex="true">
            <Col xs={3} flex="true">
                <img src='images/Deer.png' alt="Deer" style={{width: '80%'}} className="img-fluid" />
        </Col>
        <Col xs={6} flex="true" style={{display: "grid", textAlign: "center", color: "white", position: "relative" }}>
            <a href="https://spiralstairspsoi.bandcamp.com/">
            <img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" className="img-fluid" style={{borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '5px', borderStyle: 'solid', width: '70%', align: 'center'}} />
            </a>
        </Col>
        <Col xs={3} flex="true">
                <img src='images/Cheetah.png' alt="Cheetah" style={{width: '80%'}} className="img-fluid" />
        </Col>
        </Row>
    </Container>
    )
}