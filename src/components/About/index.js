import React, { useState } from 'react';
import { Button } from '../ButtonElements';
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
  CertLink,
  ResumeLink,
  ArrowDown,
  ArrowDownward
} from './AboutElements';
import ItsMe from '../../images/photo1.jpg'
import Cert from '../../pdf/gacertificate1609095570.pdf';
import Resume from '../../pdf/MarioCarbonellResume2021.pdf';

const About = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  paragraph1,
  paragraph2,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headLine}
                </Heading>
                <Subtitle darkText={darkText}>
                  {paragraph1}
                </Subtitle>
                <Subtitle darkText={darkText}>
                  {paragraph2}
                </Subtitle>
                <CertLink href={Cert} target="blank">
                  Certified Software Engineer
                </CertLink>
                <ResumeLink href={Resume} target="blank">
                  My Resume!
                </ResumeLink>
                <BtnWrap>
                  <Button to="toolbox"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                  >
                    {buttonLabel}
                    {hover ? <ArrowDownward /> : <ArrowDown />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={ItsMe} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About
