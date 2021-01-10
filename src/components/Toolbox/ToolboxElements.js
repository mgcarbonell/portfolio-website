import styled from 'styled-components';

export const ToolboxContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width 768px) {
    padding: 100px 0;
  }
`;

export const ToolboxWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ToolboxRow = styled.div`
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
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
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
    width: 60%;
    height: 60%
  }
`;

export const CertLink = styled.a`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:Hover {
    border-bottom: 3px solid #OOFFFF;
  }
`;

export const ResumeLink = styled.a`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:Hover {
    border-bottom: 3px solid #OOFFFF;
  }
`;