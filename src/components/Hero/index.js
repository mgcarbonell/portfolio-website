import React from 'react'
import Video from '../../../public/assets/video.mp4'
import {

}

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}

export default Hero
