import React from 'react';
import { 
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Mario Carbonell
            </SocialLogo>
            <WebsiteRights>
              Mario Carbonell © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://github.com/mgcarbonell" target="_blank" aria-label="Mario's Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/mgcarbonell/" target="_blank" aria-label="Mario's LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="https://twitter.com/mgcarbonell1" target="_blank" aria-label="Mario's Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
