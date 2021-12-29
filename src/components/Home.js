//This is the latest news, album releases, and other updates.

import React from "react";
import {Container, Row, Col} from 'react-bootstrap'


export default function Home(){
    return(
    <Container flex="true">
        <Row className="justify-content-center mt-5">
            <Col xs={6} md={3}>
        <h1 style = {{color:"white"}}>New Album Out February 2022</h1>
        </Col>
        <Col xs={6} md={3}>
            <img style = {{border: "3px outset"}}src="/images/hypnotized.jpg" alt="hypnotized"></img>
        </Col>
        </Row>
        <Row className="justify-content-center m-5">
            <Col xs={12}>
        <h1 style = {{color:"white"}}>On Tour With Pavement In 2022</h1>
        <h2><a href = "https://pavementband.com/#tour" style = {{color:"white"}}>Get Your Tix Here</a></h2>
        </Col>
        </Row>
    </Container>
    )
}