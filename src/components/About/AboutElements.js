import styled from 'styled-components';
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md';

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width 768px) {
    padding: 100px 0 100px 0;
  }

  @media screen and (max-width 480px) {
    padding-top: 100px 0 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding: 80px 24px 0px 24px;
  justify-content: center;

  @media screen and (max-width 768px) {
    padding: 100px 24px 0 24px;
  }

  @media screen and (max-width 480px) {
    padding: 100px 24px 0 24px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  };
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #03fff9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  };
`;

export const Subtitle = styled.p`
  font-family: 'Lato';
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#01060' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 480px){
    width: 40%;
    height: 40%
  }
`;

export const CertLink = styled.a`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: aqua;
  
  &:visited {
    color: dark-cyan;
  }

  &:hover {
    border-bottom: 3px ridge #00FFFF;
  }
`;

export const ResumeLink = styled.a`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: aqua;

  &:Visited {
    color: aqua;
  }

  &:hover {
    border-bottom: 3px ridge #00FFFF;
  }
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;