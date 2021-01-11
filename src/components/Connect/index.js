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
<<<<<<< HEAD
  IconLink
=======
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton
>>>>>>> d91ecd1e4719ef0b96fe9a0821d6df329a00212f
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
<<<<<<< HEAD
                <IconLink>
                  <Img src={Gmail}/>
                </IconLink>
                <IconLink>
                  <Img src={Github}/>
                </IconLink>
                <IconLink>
                  <Img src={Linkedin}/>
                </IconLink>
=======
                <Img src={Gmail}/>
                <Img src={Github}/>
                <Img src={Linkedin}/>
                <Img src={Twitter}/>
                <Img src={HackerRank}/>
                <Img src={LeetCode}/>
>>>>>>> d91ecd1e4719ef0b96fe9a0821d6df329a00212f
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
<<<<<<< HEAD
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
=======
              <FormWrap>
                <FormContent>
                  <Form action='#'>
                    <FormH1>Contact Me!</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='name' required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Subject</FormLabel>
                    <FormInput type='subject' required />
                    <FormLabel htmlFor='for'>Message</FormLabel>
                    <FormInput type='message' required />
                    <FormButton type='submit'>Continue</FormButton>
                  </Form>
                </FormContent>
              </FormWrap>
>>>>>>> d91ecd1e4719ef0b96fe9a0821d6df329a00212f
            </Column2>
          </ConnectRow>
        </ConnectWrapper>
      </ConnectContainer>
    </>
  )
}

export default Connect
