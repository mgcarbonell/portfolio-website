import React from 'react';
import Video from '../../assets/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
} from './HeroElements';

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
