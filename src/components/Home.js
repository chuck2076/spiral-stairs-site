//This is the latest news, album releases, and other updates.
import React from "react";
import {Container, Row, Col, Button, Table} from 'react-bootstrap'

export default function Home(){
    return(
    <Container flex="true">
        <Row className="mt-5">
            <Col xs={6} md={6}>
                <img src='images/Deer.png' alt="Deer" style={{width: '50%'}} />
        </Col>
            <Col xs={6} md={6}>
            <a flex="true" href="https://spiralstairspsoi.bandcamp.com/">
        <div className="cliptwo">New Album</div><h3 className="clip">Medley Attack!!!</h3>
        </a>
        <div className="cliptwo mb-3">Order Now</div>
        <div className="cliptwo">
      <a href="https://spiralstairspsoi.bandcamp.com/"><img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" style={{borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '5px', borderStyle: 'solid', width: '30%', align: 'center'}}/></a></div>
        </Col>
        </Row>
        <Row className= "mt-3" flex="true">
            <Col md={7} flex="true" className="mr-5 p-2">
<Table>
    <thead className="cliptwo">Shows</thead>
    <tbody className="imagetext">
        <tr>
        <td><Button variant="light" href="https://wl.seetickets.us/event/Spiral-Stairs/506673?afflky=Casbah">Get Tix</Button></td>
            <td>01/18/2023</td>
            <td>Casbah</td>
            <td>SD, CA</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.ticketmaster.com/event/09005D34C5D2455D?irgwc=1&clickid=yL53W8wkfxyNRFW0Vm26Pw3CUkDSXSxpISplww0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272">Get Tix</Button></td>
            <td>01/19/2023</td>
            <td>The Moroccan Lounge</td>
            <td>LA, CA</td>
        </tr>
        <tr>
        <td><Button variant="light" href="http://www.stubmatic.com/bottomofthehill/event/10599">Get Tix</Button></td>
            <td>01/20/2023</td>
            <td>Bottom of the Hill</td>
            <td>SF, CA</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.ticketweb.com/event/spiral-stairs-guests-sunset-tavern-tickets/12533395?pl=sunset&irgwc=1&clickid=yL53W8wkfxyNRFW0Vm26Pw3CUkDSXSR5ISplww0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272">Get Tix</Button></td>
            <td>01/24/2023</td>
            <td>Sunset Tavern</td>
            <td>Seattle, WA</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.eventbrite.com/e/spiral-stairs-tickets-420730394937?aff=aff0bandsintown&appId=onaqfvagbja_jro&comeFrom=257&artist_event_id=103787459">Get Tix</Button></td>
            <td>01/25/2023</td>
            <td>Doug Fir Lounge</td>
            <td>Portland, OR</td>
        </tr>
    </tbody>
        </Table>
        </Col>
        <Col md={3} flex="true" className="ml-5">
                <img src='images/Cheetah.png' alt="Cheetah" style={{width: '100%'}} className="img-fluid" />
        </Col>
        </Row>
    </Container>
    )
}