import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
  ConnectContainer,
  ConnectWrapper,
  ConnectRow,
  Column1,
  ImgWrap,
  Img,
  BtnWrap,
  ArrowDown,
  ArrowDownward,
  Column2,
  IconLink
} from './ConnectElements';
import Gmail from '../../icons/gmail.png';
import Twitter from '../../icons/013-twitter-1.png';
import Linkedin from '../../icons/031-linkedin.png';
import Github from '../../icons/039-github.png';
import HackerRank from '../../icons/HackerRank_logo.png';
import LeetCode from '../../icons/LeetCode_logo_black.png';

const Connect = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <>
      <ConnectContainer id="connect">
        <ConnectWrapper>
          <ConnectRow>
            <Column1>
              <ImgWrap>
                <IconLink>
                  <Img src={Gmail}/>
                </IconLink>
                <IconLink>
                  <Img src={Github}/>
                </IconLink>
                <IconLink>
                  <Img src={Linkedin}/>
                </IconLink>
                <BtnWrap>
                    <Button to="projects"
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
                      { hover ? <ArrowDownward /> : <ArrowDown /> }
                    </Button>
                  </BtnWrap>
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <IconLink>
                  <Img src={Twitter}/>
                </IconLink>
                <IconLink>
                  <Img src={HackerRank}/>
                </IconLink>
                <IconLink>
                  <Img src={LeetCode}/>
                </IconLink>
              </ImgWrap>
            </Column2>
          </ConnectRow>
        </ConnectWrapper>
      </ConnectContainer>
    </>
  )
}

export default Connect
