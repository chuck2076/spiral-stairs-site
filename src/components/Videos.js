// Carousel of Videos from YouTube
import React, { useState } from "react";
import videoData from '../videos.json'

export default function Videos(){
    const [artist, setArtist] = useState('')
    console.log('videos= '+artist)
    return( <div>
        <h1>Watch Page</h1>
        <h6>Choose an artist to view YouTube videos!</h6>        
        <select className="custom-select" id="artist"
        onChange={(e)=>setArtist(e.target.value)}>
          <option defaultValue>Choose Artist</option>
          <option value="Spiral Stairs">Spiral Stairs</option>
          <option value="Preston School of Industry">Preston School of Industry</option>
          <option value="Pavement">Pavement</option>
        </select>
        <br/>
        {videoData.map((video)=> {
            if (video.artist === artist){
                const srcUrl = "https://www.youtube.com/embed/"+video.url
                return (
                    <iframe key={video.url} width="560" height="315" src={srcUrl} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
            } else {
                return null
            }
        })}
    </div>
   )
};