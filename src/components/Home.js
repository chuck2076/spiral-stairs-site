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
        <td><Button variant="light" href="https://eplus.jp/sf/detail/0350250001-P0030006P0030007?P6=001&P1=0402&P59=1&block=true">Get Tix</Button></td>
            <td>02/15-16/2023</td>
            <td>Tokyo Dome</td>
            <td>Misakicho, Japan</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://eplus.jp/sf/detail/0350250001-P0030006P0030007?P6=001&P1=0402&P59=1&block=true">Get Tix</Button></td>
            <td>02/18/2023</td>
            <td>Namba Hatch</td>
            <td>Osaka, Japan</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://perthconcerthall.com.au/events/event/pavement">Get Tix</Button></td>
            <td>02/22/2023</td>
            <td>Perth Concert Hall</td>
            <td>Perth, AU</td>
        </tr>
        <tr>
        <td><Button variant="light" >Sold Out</Button></td>
            <td>02/24/2023</td>
            <td>Thebarton Theatre</td>
            <td>Torrensville, AU</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://monafoma.net.au/">Get Tix</Button></td>
            <td>02/25/2023</td>
            <td>Mona Foma</td>
            <td>Berriedale, AU</td>
        </tr>
        <tr>
        <td><Button variant="light">Sold Out</Button></td>
            <td>02/28/2023</td>
            <td>Fortitude Music Hall</td>
            <td>Brisbane, AU</td>
        </tr>
        <tr>
        <td><Button variant="light">Sold Out</Button></td>
            <td>03/01/2023</td>
            <td>Anita's Theatre</td>
            <td>Thirroul, AU</td>
        </tr>
        <tr>
        <td><Button variant="light">Sold Out</Button></td>
            <td>03/02/2023</td>
            <td>Enmore Theatre</td>
            <td>Sydney, AU</td>
        </tr>
        <tr>
        <td><Button variant="light">Sold Out</Button></td>
            <td>03/03/2023</td>
            <td>Palais Theatre</td>
            <td>St. Kilda, AU</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.ticketmaster.com.au/event/13005D2DD0625C47">Get Tix</Button></td>
            <td>03/04/2023</td>
            <td>Tent Pole Festival</td>
            <td>Waurn Ponds, AU</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.ticketmaster.co.nz/event/24005D6A9A30181B?clickId=yL53W8wkfxyNRFW0Vm26Pw3CUkA3p9SNISplww0&irgwc=1&utm_source=219208-Bandsintown&utm_medium=affiliate&utm_campaign=219208">Get Tix</Button></td>
            <td>03/07/2023</td>
            <td>The Civic</td>
            <td>Aukland, NZ</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.ticketmaster.co.nz/event/24005D697BA20F30?clickId=yL53W8wkfxyNRFW0Vm26Pw3CUkA3p-UdISplww0&irgwc=1&utm_source=219208-Bandsintown&utm_medium=affiliate&utm_campaign=219208">Get Tix</Button></td>
            <td>03/08/2023</td>
            <td>St. James Theatre</td>
            <td>Wellington, NZ</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.24tix.com/event/359229353/kilby-block-party-4">Get Tix</Button></td>
            <td>05/14/2023</td>
            <td>Kilby Block Party</td>
            <td>Salt Lake City, UT</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://bluedot.ticketline.co.uk/order/tickets/step/tickets/13363880/bluedot-2023-weekend-jodrell-bank-observatory-2023-07-21-09-00-00">Get Tix</Button></td>
            <td>07/22/2023</td>
            <td>Blue Dot Festival</td>
            <td>Macclesfield, UK</td>
        </tr>
        <tr>
        <td><Button variant="light" href="https://www.pavementiniceland.com/">Get Tix</Button></td>
            <td>07/27-29/2023</td>
            <td>Harpa</td>
            <td>Reykjavik, Iceland</td>
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