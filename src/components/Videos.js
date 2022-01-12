// Carousel of Videos from YouTube
import React, { useState } from "react";
import videoData from '../videos.json'

export default function Videos(){
    const [artist, setArtist] = useState('Spiral Stairs')
    console.log('videos= '+artist)
    return( <div className="m-2 justify-content-center">
        <h1>Watch</h1>
        <h6 style = {{color: "white"}}>Click to select a project!</h6>        
        <select className="custom-select m-50% w-50px" id="artist"
        onChange={(e)=>setArtist(e.target.value)}>
          <option defaultValue="Spiral Stairs">Spiral Stairs</option>
          <option value="Preston School of Industry">Preston School of Industry</option>
          <option value="Pavement">Pavement</option>
        </select>
        <p className="m-2">
        {videoData.map((video)=> {
            if (video.artist === artist){
                const srcUrl = "https://www.youtube.com/embed/"+video.url
                return (
                    <iframe key={video.url} width="350" height="200" src={srcUrl} title={video.title} frameBorder="2px" frameMargin="10px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
            } else {
                return null
            }
        })}
        </p>
    </div>
   )
};