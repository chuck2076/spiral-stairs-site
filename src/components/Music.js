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
              <iframe src="https://open.spotify.com/embed/album/1aoq6sALy90x5gpPEqy6ag?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
           )
        })}
    </div>
   )
}