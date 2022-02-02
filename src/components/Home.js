//This is the latest news, album releases, and other updates.

import React from "react";
import {Container, Row, Col} from 'react-bootstrap'


export default function Home(){
    return(
    <Container flex="true">
        <Row className="justify-content-center mt-5" flex="true">
            <Col xs={3} flex="true">
                <img src='images/Deer.png' alt="Deer" style={{width: '100%'}} className="img-fluid" />
        </Col>
        <Col xs={6} flex="true">
            <img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" className="img-fluid" style={{borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '5px', borderStyle: 'solid', width: '500px'}} />
            <h1 style = {{color: "white", marginLeft: '10%'}}>New Album<br></br>April 2022</h1>
        </Col>
        <Col xs={3} flex="true">
                <img src='images/Cheetah.png' alt="Cheetah" style={{width: '100%'}} className="img-fluid pr-5" />
        </Col>
        </Row>
        <Row className="justify-content-center m-5" flex="true">
            <Col xs={12}>
        <h1 style = {{color:"white", textAlign: "center"}}>On Tour With Pavement In 2022</h1>
        <h2 style = {{textAlign: "center"}}><a href = "https://pavementband.com/#tour" style = {{color:"white" }}>Get Your Tix Here</a></h2>
        </Col>
        </Row>
    </Container>
    )
}