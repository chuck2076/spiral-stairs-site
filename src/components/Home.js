//This is the latest news, album releases, and other updates.

import React from "react";
import {Container, Row, Col} from 'react-bootstrap'


export default function Home(){
    return(
    <Container flex="true">
        <Row className="justify-content-center mt-5">
        <a flex="true" href="https://spiralstairspsoi.bandcamp.com/">
        <div className="cliptwo">New Album</div><h2 className="clip">Medley Attack!!!</h2><div className="cliptwo">July 08 2022</div>
        </a> 
        <a href="https://spiralstairspsoi.bandcamp.com/" className="cliptwo mt-3" >PreOrder <img className="preorder" src="images/ElBuen.png" width="15%" alt="el buen" /> Now</a>
        </Row>
        <Row className="justify-content-center mt-3" flex="true">
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