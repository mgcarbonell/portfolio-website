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
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElements'
import Typical from 'react-typical';
import Zoom from 'react-reveal/Zoom'

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
        <HeroP>I'm{' '}
        <Typical 
            loop={Infinity}
            wrapper={'b'}
            steps={[
              "a software engineer",
              1000,
              "a fullstack developer",
              1000,
              "an open sourcer",
              1000,
              "a web developer",
              1000,
              "intensely curious",
              1000,
              "looking to the next tech horizon.",
              3000,
            ]}
          />
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Connect! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
