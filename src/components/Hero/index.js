import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownward,
  ArrowDown,
} from './HeroElements';
import { Button } from '../ButtonElements';
// import Typical from 'react-typical';
import Typewriter from 'typewriter-effect';
import { Zoom } from 'react-awesome-reveal';

const Hero = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <Zoom>
          <HeroH1>
            It's me, Mario!
          </HeroH1>
        </Zoom>
        <HeroP>
        <Typewriter
            options={{
              strings: [
              "Software engineer",
              "Fullstack developer",
              "Open sourcer",
              "Dreamer",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
            }}
          />
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            About Me {hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
