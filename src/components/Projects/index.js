import React from 'react';
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
  ProjectsP
} from './ProjectElements';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Populus Trivia</ProjectsH2>
          <ProjectsP>Description</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Snack Overflow</ProjectsH2>
          <ProjectsP>Description</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>cuneiform</ProjectsH2>
          <ProjectsP>Description</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>zer0chat</ProjectsH2>
          <ProjectsP>Description</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
