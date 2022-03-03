/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
// Carousel of Albums with Listen and Buy Links
import React from "react";
import {Container, Row} from 'react-bootstrap'
import musicData from '../music.json'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function Music(){
   return( <Container flex="true" style = {{color:"white"}}>
         <RBCarousel           
            animation={true}
            autoplay={false}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              version={4}
            >

        {musicData.map((album)=>{
           return (
            <div key = {album.title} style={{textAlign: 'center', marginTop: '5%'}}>
              <h2>{album.artist}</h2>
              <h3>{album.title}</h3>
              {/* don't display link if not on bandcamp */}
              {album.bandcampUrl === "" ? null : <h3><a href={album.bandcampUrl} target="_blank"><img src="/images/bandcamp-logo-svgrepo-com.svg"></img></a></h3>}
              <img src={album.image} width='30%' alt={album.title}></img>
              <Row>
              <iframe title={album.title} style={{textAlign: 'center', fontFamily: "Work Sans", margin: '5% 15%', width: '70%', padding: '0%'}} src={album.spotEmbed} height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
               </Row>
            </div>
           )
        })}

      </RBCarousel>
    </Container>
   )
}