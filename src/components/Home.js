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
                        <td><Button variant="light" href="https://wl.eventim.us/event/Mosswood-Meltdown-Pre-Party-with-Pavement-and-more/676010?afflky=MosswoodMeltdown" target="_blank">Get Tix</Button></td>
                            <td>07/17/26</td>
                            <td>Mosswood Meltdown Pre-Party</td>
                            <td>Oakland, CA</td>
                        </tr>
                        <tr>
                        <td><Button variant="light">Sold Out</Button></td>
                            <td>07/18/26</td>
                            <td>Revolution Hall</td>
                            <td>Portland, OR</td>
                        </tr>
                        <tr>
                        <td><Button variant="light">Sold Out</Button></td>
                            <td>07/19/26</td>
                            <td>Woodland Park Zoo</td>
                            <td>Seattle, WA</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://www.axs.com/events/1281679/pavement-tickets?skin=palacetheatre">Get Tix</Button></td>
                            <td>07/21/26</td>
                            <td>Palace Theatre</td>
                            <td>Minneapolis, MN</td>
                        </tr>
                        <tr>
                        <td><Button variant="light">Sold Out</Button></td>
                            <td>07/22/26</td>
                            <td>Salt Shed Fairgrounds</td>
                            <td>Chicago, IL</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://www.axs.com/events/1283578/pavement-tickets">Get Tix</Button></td>
                            <td>07/23/26</td>
                            <td>Agora Theatre</td>
                            <td>Cleveland, OH</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://www.ticketmaster.com/pavement-more-at-make-the-world-philadelphia-pennsylvania-07-24-2026/event/0200647A99E58F7C?utm_medium=affiliate&irgwc=1&afsrc=1&clickid=UJtR7FwSdxyZTNVRyk33BTxhUkuypl15ISplww0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&ircid=4272">Get Tix</Button></td>
                            <td>07/24/26</td>
                            <td>Make The World Better</td>
                            <td>Philadelphia, PA</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://www.axs.com/events/1286639/pavement-tickets?skin=nationalva">Get Tix</Button></td>
                            <td>07/25/26</td>
                            <td>The National</td>
                            <td>Richmond, VA</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://www.axs.com/events/1284231/pavement-tickets?skin=ryman">Get Tix</Button></td>
                            <td>07/27/26</td>
                            <td>The Ryman Auditorium</td>
                            <td>Nashville, TN</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://www.axs.com/events/1308718/pavement-tickets?skin=ryman">Get Tix</Button></td>
                            <td>07/28/26</td>
                            <td>The Ryman Auditorium</td>
                            <td>Nashville, TN</td>
                        </tr>
                        <tr>
                        <td><Button variant="light" href="https://shakyknees.frontgatetickets.com/?utm_source=ticketmaster&utm_medium=tm_website&utm_campaign=websiteshell&utm_term=comp&utm_content=shakyknees&utm_medium=affiliate&irgwc=1&afsrc=1&clickid=UJtR7FwSdxyZTNVRyk33BTxhUkuypnVtISplww0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&ircid=4272">Get Tix</Button></td>
                            <td>09/19/26</td>
                            <td>Shaky Knees Festival</td>
                            <td>Atlanta, GA</td>
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