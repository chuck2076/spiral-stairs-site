//This is the latest news, album releases, and other updates.
import React from "react";
import {Button, Table} from 'react-bootstrap'

export default function Home(){
    return(
    <div className="home-container">
        <div className="hero-section">
            <div className="hero-image">
                <img src='images/Deer.png' alt="Deer" />
            </div>
            <div className="hero-content">
                <a href="https://spiralstairspsoi.bandcamp.com/">
                    <div className="cliptwo">New Album</div>
                    <h3 className="clip">Medley Attack!!!</h3>
                </a>
                <div className="cliptwo">Order Now</div>
                <div className="album-cover">
                    <a href="https://spiralstairspsoi.bandcamp.com/">
                        <img src="/images/MedleyAttack_FrontCover.jpg" alt="Medley Attack" />
                    </a>
                </div>
            </div>
        </div>
        <div className="content-section">
            <div className="tour-dates">
                <h2>Pavement Shows</h2>
                <Table>
                    <tbody className="imagetext">
                        <tr>
                        <td><Button variant="light" href="https://www.prekindle.com/promo/id/-2853111880280643763" target="_blank">Get Tix</Button></td>
                            <td>09/26/25</td>
                            <td>Longhorn Ballroom</td>
                            <td>Dallas, TX</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://wl.seetickets.us/event/LEVITATION-2025/651997?afflky=LEVITATION" target="_blank">Get Tix</Button></td>
                            <td>09/28/25</td>
                            <td>Levitation Festival</td>
                            <td>Austin, TX</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://feverup.com/m/359217/en" target="_blank">Get Tix</Button></td>
                            <td>11/01/25</td>
                            <td>HIPNOSIS 2025</td>
                            <td>Ciudad De México, Mexico</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="side-image">
                <img src='images/Cheetah.png' alt="Cheetah" />
            </div>
        </div>
    </div>
    )
}