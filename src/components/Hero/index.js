import React, { useState, useEffect, useRef } from 'react';
import {
  HeroContainer,
  VantaBg,
  HeroBg,
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
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min';


const Hero = () => {

  const [hover, setHover] = useState(false)
  
  const [vantaEffect, setVantaEffect] = useState(0)
  
  const myRef = useRef(null)
  
  useEffect(() => {
    if(!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        color: 0x3ffff3,
        backgroundColor: 0x1a1625,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VantaBg ref={myRef} />
      </HeroBg>
      <HeroContent>
        <Zoom>
          <HeroH1>
            Hi! It's me, Mario!
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
