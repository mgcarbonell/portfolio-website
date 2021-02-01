import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../ButtonElements'
import {
  ConnectContainer,
  ConnectWrapper,
  ConnectRow,
  Column1,
  ImgWrap,
  Img,
  BtnWrap,
  ArrowUp,
  ArrowUpward,
  Column2,
  IconLink
} from './ConnectElements';
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import Gmail from '../../icons/gmail.png';
import Twitter from '../../icons/013-twitter-1.png';
import Linkedin from '../../icons/031-linkedin.png';
import Github from '../../icons/039-github.png';
import HackerRank from '../../icons/HackerRank_logo.png';
import LeetCode from '../../icons/LeetCode_logo_black.png';

const Connect = () => {
  const [hover, setHover] = useState(false);

  const [vantaEffect, setVantaEffect] = useState(0);

  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE: THREE,
        color: 0x53cdcd,
        backgroundColor: 0xe1e1e1,
        points: 14,
        maxDistance: 24,
        spacing: 16
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <>
      <ConnectContainer id="connect" ref = { myRef }>
        <ConnectWrapper>
          <ConnectRow>
            <Column1>
              <ImgWrap>
                <IconLink
                  target="_blank"
                  href ="mailto:mgcarbonell@gmail.com"
                  aria-label="Gmail"
                >
                  <Img src={Gmail}/>
                </IconLink>
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <IconLink
                  target="_blank"
                  href="https://github.com/mgcarbonell"
                  aria-label="Github"
                >
                  <Img src={Github}/>
                </IconLink>
                <IconLink
                  target="_blank"
                  href="https://www.linkedin.com/in/mgcarbonell/"
                  aria-label="Linkedin"
                >
                  <Img src={Linkedin}/>
                </IconLink>
                <IconLink
                  target="_blank"
                  href="https://twitter.com/mgcarbonell1"
                  aria-label="Twitter"
                >
                  <Img src={Twitter}/>
                </IconLink>
              </ImgWrap>
            </Column2>
            <BtnWrap>
              <Button to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                primary="true"
                dark="true"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Back To Top
                { hover ? <ArrowUpward /> : <ArrowUp /> }
              </Button>
            </BtnWrap>
          </ConnectRow>
        </ConnectWrapper>
      </ConnectContainer>
    </>
  )
}

export default Connect
