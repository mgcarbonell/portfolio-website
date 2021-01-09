import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  /* Add :before style */
`

export const HeroBg = styled.div`
  position: aboslute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

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

/* instead of a VideoBg I might want a react-reveal picture gallery, 3 of the photos I have in public */