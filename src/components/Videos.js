// Carousel of Videos from YouTube

import React, { useState } from "react";

export default function Videos(){
    const [videos, setVideos] = useState('')
    console.log('videos= '+videos)
    return( <div>
        <h1>Watch Page</h1>
        <h6>Bootstrap Select</h6>        
        <select className="custom-select" id="artist"
        onChange={(e)=>setVideos(e.target.value)}>
          <option defaultValue>Choose Artist</option>
          <option value="SpiralStairs">Spiral Stairs</option>
          <option value="Preston">Preston School of Industry</option>
          <option value="Pavement">Pavement</option>
        </select>   
    </div>
   )
};