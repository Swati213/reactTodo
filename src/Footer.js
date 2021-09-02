import React from 'react'
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css"
const Footer = () => {
    return (
        <div className="container">
        <div className="footer">
        <p>© 2021 ToDO List, Inc.·Privacy·Terms·Sitemap·Company details</p>
        <p className="social-icons">
        
         <p><LanguageIcon /></p> 
          
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com">
            
            <InstagramIcon />
          </a>
        </p>
      </div>
  
        </div>
    )
}

export default Footer
