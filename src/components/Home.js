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
            <img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" className="img-fluid" style={{borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '5px', borderStyle: 'solid', width: '100%', align: 'center'}} />
            <h1 style = {{marginTop: '10%', textAlign: 'center'}}>New Album<br></br>"Medley Attack"<br></br>April 2022</h1>
        </Col>
        <Col xs={3} flex="true">
                <img src='images/Cheetah.png' alt="Cheetah" style={{width: '100%'}} className="img-fluid" />
        </Col>
        </Row>
    </Container>
    )
}