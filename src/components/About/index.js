import React from 'react'
import { Button } from 'react-scroll'
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './AboutElements'

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  Top Line
                </TopLine>
                <Heading>
                  Heading
                </Heading>
                <Subtitle>
                  Subtitle
                </Subtitle>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About
