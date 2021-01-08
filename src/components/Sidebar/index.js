import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="about">
          About
        </SidebarLink>
        <SidebarLink to="projects">
          Projects
        </SidebarLink>
        <SidebarLink to="Toolbox">
          Toolbox
        </SidebarLink>
        <SidebarLink to="contact">
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
