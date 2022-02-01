//This is the latest news, album releases, and other updates.

import React from "react";
import {Container, Row, Col} from 'react-bootstrap'


export default function Home(){
    return(
    <Container flex="true">
        <Row className="justify-content-center mt-5" flex="true">
            <Col xs={6} flex="true">
        <h1 style = {{color: "white", alignItems: "center"}}>New Album Out February 2022</h1>
        </Col>
        <Col xs={6} flex="true">
            <img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" size="50%" padding="50px" style={{borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '5px', borderStyle: 'solid', width: '500px'}} />
        </Col>
        </Row>
        <Row className="justify-content-center m-5" flex="true">
            <Col xs={12}>
        <h1 style = {{color:"white"}}>On Tour With Pavement In 2022</h1>
        <h2><a href = "https://pavementband.com/#tour" style = {{color:"white", textAlign: "center"}}>Get Your Tix Here</a></h2>
        </Col>
        </Row>
    </Container>
    )
}