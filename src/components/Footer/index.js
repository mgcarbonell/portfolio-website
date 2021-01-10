import React from 'react';
import { 
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink
 } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

  const goHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle to='/' onClick={goHome}>
                Mario Carbonell
              </FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLink href="" target="_blank">
                <Icon src={}/>
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
