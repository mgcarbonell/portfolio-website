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

} from './ToolboxElements';
import ReactIcon from '../../icons/002-atom.png';
import Python from '../../icons/001-python.png';
import Javascript from '../../icons/javascript_icon.png'
import Postgres from '../../icons/postgres.png'
import Nodejs from '../../icons/node_js.png'
import MarkupLanguage from '../../icons/html_css.png'
import MySQL from '../../icons/mysql.png'
import LinuxPenguin from '../../icons/004-linux.png'


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
                <TopLine darkText={darkText}>
                  { topLine }
                </TopLine>
                <Heading darkText={darkText}>
                  { headLine }
                </Heading>
                <Subtitle darkText={darkText}>
                  { skill1 }
                </Subtitle>
                <Subtitle darkText={darkText}>
                  { skill2 }
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
                <Img src={ Javascript } alt="Javascript"/>
                <Img src={ Python } alt="Python"/>
                <Img src={ MarkupLanguage } alt="HTML5/CSS3"/>
                <Img src={ Nodejs } alt="Node.js"/>
                <Img src={ ReactIcon } alt="React"/>
                <Img src={ Postgres } alt="PostgresQL"/>
                <Img src={ MySQL } alt="MySQL"/>
                <Img src={ LinuxPenguin } alt="Linux"/>
              </ImgWrap>
            </Column2>
          </ToolboxRow>
        </ToolboxWrapper>

      </ToolboxContainer>
    </>
  )
}

export default Toolbox
