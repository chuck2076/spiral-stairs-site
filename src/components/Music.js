// Carousel of Albums with Listen and Buy Links
import React from "react";
import musicData from '../music.json'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function Music(){
   return( <div>
         <RBCarousel           
            animation={true}
            autoplay={false}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              version={4}
            >
        {musicData.map((album)=>{
           return (
            <div key = {album.title} className="d-block w-100">
              <h3>{album.artist}</h3>
              <h4>{album.title}</h4>
              <img className="justify-content-center" src={album.image} alt={album.title}></img>
              <iframe title={album.title} src={album.spotEmbed} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
           )
        })}
         </RBCarousel>
    </div>
   )
}