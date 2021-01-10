import React from 'react';
import { Button } from '../ButtonElements';
import {
  ToolboxContainer,
  ToolboxWrapper,
  ToolboxRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,

} from './ToolboxElements'


const Toolbox = ({ 
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
  alt,
  primary,
  dark,
  dark2 
  }) => {
  return (
    <>
      <ToolboxContainer lightBg={ lightBg } id={ id }>
        <ToolboxWrapper>
          <ToolboxRow imgStart={ imgStart }>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>
                  { topLine }
                </TopLine>
                <Heading lightText={lightText}>
                  { headLine }
                </Heading>
                <Subtitle darkText={darkText}>
                  { paragraph1 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { paragraph2 }
                </Subtitle>
                <BtnWrap>
                  <Button to="toolbox"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={ primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    { buttonLabel }
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img/>
              </ImgWrap>
            </Column2>
          </ToolboxRow>
        </ToolboxWrapper>

      </ToolboxContainer>
    </>
  )
}

export default Toolbox
