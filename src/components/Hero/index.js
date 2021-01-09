import React, { useState, useEffect, useRef } from 'react';
import {
  HeroContainer,
  HeroBg,
  VantaBg
} from './HeroElements';
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min';

const Hero = () => {
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



  return (
    <HeroContainer>
      <HeroBg>
        <VantaBg ref={myRef} />
      </HeroBg>
    </HeroContainer>
  )
}

export default Hero
