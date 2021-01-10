import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  
  :before {
    content: '';
    position: aboslute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg, 
        rbga(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.6) 100%
      ), 
      linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%,
        transparent 1800%
      );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VantaBg = styled.div`
  el: "myRef";
  mouseControls: true;
  touchControls: true;
  gyroControls: false;
  minHeight: 200.00;
  minWidth: 200.00;
  scale: 1.00;
  scaleMobile: 1.00;
  color: #3ffff3;
  backgroundColor: #1a1625;
  points: 14.00;
  maxDistance: 23.00;
  spacing: 17.00;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;

`

/* export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
*/

export const VantaBg = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #2323a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1980px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  font-family: 'Oswald';
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  font-family: 'monospace';
  margin-top 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
/* instead of a VideoBg I might want a react-reveal picture gallery, 3 of the photos I have in public */