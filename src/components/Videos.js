// Carousel of Videos from YouTube
import React, { useState } from "react";
import videoData from '../videos.json'

export default function Videos(){
    const [artist] = useState('')
    console.log('videos= '+artist)
    return( <div className="xs-12 ml-5 align-items-center flex-content-center">
        
        {/* <h6 style = {{color: "white"}}>Choose an artist to view YouTube videos!</h6>        
        <select className="custom-select m-50% w-50px" id="artist"
        onChange={(e)=>setArtist(e.target.value)}>
          <option defaultValue="Spiral Stairs">Spiral Stairs</option>
          <option value="Preston School of Industry">Preston School of Industry</option>
          <option value="Pavement">Pavement</option>
        </select> */}
        <p className="xs-12 align-items-center flex-content-center flex direction-row">
        {videoData.map((video)=> {
  //          if (video.artist === artist){
                const srcUrl = "https://www.youtube.com/embed/"+video.url
                return (
                    <iframe key={video.url} width="40%" height = "100%" style={{margin: '0.5%', borderImage: 'url(/images/Rainbow.jpg) 100', borderWidth: '3px', borderStyle: 'solid'}} src={srcUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
    //        } else {
    //            return null
    //        }
        })}
        </p>
    </div>
   )
};