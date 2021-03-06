// Contact and Social Media Links
import React from "react";


export default function Footer(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center mt-2">

    <div className="m-2">
      {/* change bandcamp logo to bandcamp-logo-svgrepo-com.svg because nobody recognizes this symbol, also resize to match other logos */}
        <a href="https://spiralstairspsoi.bandcamp.com/"><img src="/images/bandcamp-logo-svgrepo-com.svg" alt="Bandcamp"></img></a>
      </div>      
    <div className="m-2">
        <a href="https://twitter.com/spiralmusic"><img src="/images/3228543_app_b_w_logo_media_popular_icon.svg" alt="Twitter"></img></a>
      </div>
      <div className="m-2">
        <a href="https://www.instagram.com/spiralstairsofficial/"><img src="/images/3228551_app_b_w_instagram_logo_media_icon.svg" alt="Instagram"></img></a>
      </div>
      <div className="m-2">
        <a href="https://www.youtube.com/watch?v=FJ9tGhVk9j4"><img src="/images/3228540_app_b_w_logo_media_popular_icon.svg" alt="YouTube"></img></a>
      </div>
      <div className="m-2">
        <a href="mailto:spiralstairsofficial@gmail.com"><img src="/images/4490614_email_internet_media_social_social media_icon.svg" alt="Email"></img></a>
      </div>
        
        </nav>
    )
}