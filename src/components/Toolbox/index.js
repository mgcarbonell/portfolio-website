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
  skill1, 
  skill2, 
  skill3, 
  skill4, 
  skill5, 
  skill6, 
  skill7, 
  skill8, 
  skill9, 
  skill10, 
  skill11,
  buttonLabel, 
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
                  { skill1 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill3 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill4 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill5 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill6 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill7 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill8 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill9 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill10 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill11 }
                </Subtitle>
                <BtnWrap>
                  <Button to="projects"
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
