// Carousel of Albums with Listen and Buy Links
import React from "react";
import musicData from '../music.json'
import Carousel from 'react-bootstrap/Carousel';

export default function Music(){
   return( <div>
        <h2>Listen Page</h2>
         <Carousel>
            <Carousel.Item>
        {musicData.map((album)=>{
           return (
            <div key = {album.title} className="d-block w-100">
              <h3>{album.artist}</h3>
              <h4>{album.title}</h4>
              <img src={album.image} alt={album.title}></img>
              <iframe title={album.title} src={album.spotEmbed} width="20%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
           )
        })}
         </Carousel.Item>
        </Carousel>
    </div>
   )
}