// Carousel of Albums with Listen and Buy Links
import React from "react";
import musicData from '../music.json'

export default function Music(){
   return( <div>
        <h1>Listen Page</h1>
        {musicData.map((album)=>{
           return (
            <div key = {album.title}>
              <h3>{album.artist}</h3>
              <h4>{album.title}</h4>
              <img src={album.image} alt={album.title}></img>
              <iframe title={album.title} src={album.spotEmbed} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            {/* {album.spotEmbed.replace(/^"(.*)"$/, '$1')} */}
            </div>
           )
        })}
    </div>
   )
}