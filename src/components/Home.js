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
    <thead className="nav-link">Pavement Shows</thead>
    <tbody className="imagetext">
        <tr>
        <td><Button variant="light" href="https://www.bilbaobbklive.com/en/tickets-festival/">Get Tix</Button></td>
            <td>07/07/2023</td>
            <td>Bilbao BBK Live 2023</td>
            <td>Bilbao, Espana</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://bluedot.ticketline.co.uk/order/tickets/step/tickets/13363880/bluedot-2023-weekend-jodrell-bank-observatory-2023-07-21-09-00-00">Get Tix</Button></td>
            <td>07/22/2023</td>
            <td>Blue Dot Festival</td>
            <td>Macclesfield, UK</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://roisindubh.net/listings/pavement-2023-07-24-190000-78060">Get Tix</Button></td>
            <td>07/24/2023</td>
            <td>Heineken Big Top</td>
            <td>Gaillimh, Ireland</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.pavementiniceland.com/">Get Tix</Button></td>
            <td>07/27-29/2023</td>
            <td>Harpa</td>
            <td>Reykjavik, Iceland</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.etix.com/ticket/v/6831/hopscotch-music-festival">Get Tix</Button></td>
            <td>09/07/2023</td>
            <td>Hopscotch Music Festival</td>
            <td>Raleigh, NC</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.axs.com/events/484539/pavement-tickets?skin=brooklynsteel">Get Tix</Button></td>
            <td>09/11-14/2023</td>
            <td>Brooklyn Steel</td>
            <td>Brooklyn, NY</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.ticketmaster.com/homecoming-festival-2023-saturday-ticket-cincinnati-ohio-09-16-2023/event/16005EA8C8573094?irgwc=1&clickid=yNvWeSS61xyNWhXRYE2FCwsmUkASdcTZuzbTSE0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272">Get Tix</Button></td>
            <td>09/16/2023</td>
            <td>Homecoming Festival</td>
            <td>Cleveland, OH</td>
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