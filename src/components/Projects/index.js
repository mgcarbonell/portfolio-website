import React, { useState } from 'react';
import Icon1 from '../../images/project1.png'
import Icon2 from '../../images/project2.png'
import Icon3 from '../../images/project3.png'
import Icon4 from '../../images/project4.png'
import { 
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectLink,
  ProjectBtnWrap,
  ArrowDownward,
  ArrowDown
} from './ProjectElements';
import { Button } from '../ButtonElements'

const Projects = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectLink
          target="_blank"
          href="https://mgcarbonell.github.io/trivia-game/"
          aria-label="Populus Trivia"
        >
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Populus Trivia</ProjectsH2>
            <ProjectsP>`Populus Trivia is a vanilla Javascript (Javascript, HTML, CSS) application that tests people on their civic knowledge.`</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectLink
          target="_blank"
          href="https://github.com/mgcarbonell/snack-overflow"
          aria-label="Snack Overflow"
        >
          <ProjectsCard>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Snack Overflow</ProjectsH2>
            <ProjectsP>Snack Overflow is a fullsnack application where users can create a library of their favorite snacks! Written in Node.js, Postgres, Express, and EJS.</ProjectsP>
          </ProjectsCard>
        </ProjectLink>          
        <ProjectLink
          target="_blank"
          href="https://github.com/mgcarbonell/cuneiform-frontend"
          aria-label="cuneiform"
        >
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>cuneiform</ProjectsH2>
            <ProjectsP>cuneiform is a fullstack application written in Postgres, Express, React, Node.js. A journaling site with inspiration derived from a supplied writing prompt or an external API!</ProjectsP>
          </ProjectsCard>
        </ProjectLink>          
        <ProjectLink
          target="_blank"
          href="https://zer0chat.herokuapp.com"
          aria-label="zer0chat"
        >
          <ProjectsCard>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2>zer0chat</ProjectsH2>
            <ProjectsP>Zerochat is a cyberpunk inspired chat room written in Postgres, Express, React, Node.js with socket.io (websockets integration for real time chatting.</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectBtnWrap>
          <Button to="connect"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Let's Connect! {hover ? <ArrowDownward /> : <ArrowDown /> }
          </Button>
        </ProjectBtnWrap>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
