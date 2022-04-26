//This is the latest news, album releases, and other updates.

import { Button } from "bootstrap";
import React from "react";
import {Container, Row, Col} from 'react-bootstrap'


export default function Home(){
    return(
    <Container flex="true">
        <Row className="justify-content-center mt-5">
        <a flex="true" href="https://spiralstairspsoi.bandcamp.com/">
        <h3 className="cliptwo">New Album</h3><h1 className="clip">Medley Attack!!!</h1><h3 className="cliptwo">July 08 2022</h3>
        </a> 
        <a href="https://spiralstairspsoi.bandcamp.com/" className="cliptwo mt-5 h3" >PreOrder <img className="preorder" src="images/ElBuen.png" width="40%" alt="el buen" /> Now</a>
        </Row>
        <Row className="justify-content-center mt-5" flex="true">
            <Col xs={3} flex="true">
                <img src='images/Deer.png' alt="Deer" style={{width: '100%'}} className="img-fluid" />
        </Col>
        <Col xs={6} flex="true" style={{display: "grid", textAlign: "center", color: "white", position: "relative" }}>
            <a href="https://spiralstairspsoi.bandcamp.com/">
            <img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" className="img-fluid" style={{borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '5px', borderStyle: 'solid', width: '100%', align: 'center'}} />
            </a>
        </Col>
        <Col xs={3} flex="true">
                <img src='images/Cheetah.png' alt="Cheetah" style={{width: '100%'}} className="img-fluid" />
        </Col>
        </Row>
    </Container>
    )
}