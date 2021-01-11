import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
  Nav, 
  NavContainer, 
  Logo,
  MobileIcon,
  NavMenu,
  NavItem, 
  NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if(window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }} >
        <Nav scrollNav={ scrollNav }>
          <NavContainer>
            <Logo to="/" onClick={ toggleHome }>
              MC
            </Logo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                  smooth={ true }
                  duration={ 500 }
                  spy={ true }
                  exact ='true'
                  offset={ -80 }
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="toolbox"
                  smooth={ true }
                  duration={ 500 }
                  spy={ true }
                  exact ='true'
                  offset={ -80 }
                >
                  Toolbox
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="projects"
                  smooth={ true }
                  duration={ 500 }
                  spy={ true }
                  exact ='true'
                  offset={ -80 }
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"
                  smooth={ true }
                  duration={ 500 }
                  spy={ true }
                  exact ='true'
                  offset={ -80 }
                >
                  Connect
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
