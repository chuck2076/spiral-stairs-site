// Carousel of Albums with Listen and Buy Links
import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import musicData from '../music.json'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function Music(){
   return( <Container flex="true">
         <RBCarousel           
            animation={true}
            autoplay={false}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              version={4}
            >

        {musicData.map((album)=>{
           return (
            <div key = {album.title} className="justify-content-center">
              <h3 className="justify-content-center">{album.artist}</h3>
              <h4 className="justify-content-center">{album.title}</h4>
              <img className="justify-content-center mb-2" src={album.image} alt={album.title}></img>
              <Row>
              <iframe title={album.title} src={album.spotEmbed} width="70%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
               </Row>
            </div>
           )
        })}

      </RBCarousel>
    </Container>
   )
}