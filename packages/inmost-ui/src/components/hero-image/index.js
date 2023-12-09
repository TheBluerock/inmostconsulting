import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const HeroImage = () => {
    return(
        <StaticImage 
            src="./hero-image.webp" 
            alt="hero"
            style={{ borderRadius: "540px 540px 0 0"}} 
        />
    );
}

export default HeroImage;