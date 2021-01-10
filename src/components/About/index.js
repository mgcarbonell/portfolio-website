import React from 'react';
import { Button } from 'react-scroll';
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
  Img,
  CertLink
} from './AboutElements';
import Cert from '../../pdf/gacertificate1609095570.pdf';

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
              <CertLink href={Cert}>Certified Software Engineer</CertLink>
            </Column2>
          </AboutRow>
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About
