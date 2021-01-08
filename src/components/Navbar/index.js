import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavContainer, 
  Logo,
  MobileIcon,
  NavMenu,
  NavItem, 
  NavLinks
} from './NavbarElements';

const Navbar = () => {



  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            MC
          </Logo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="toolbox">
                Toolbox
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar
