import styled from 'styled-components';
import { MdKeyboardArrowUp, MdArrowUpward } from 'react-icons/md';

export const ConnectContainer = styled.div`
  color: #fff;
  background: #f9f9f9;

  @media screen and (max-width 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width 480px) {
    padding-top: 100px 0;
  }
`;

export const ConnectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 80px 24px 0px 24px;
  justify-content: center;
  align-content: space-around;

  @media screen and (max-width 768px) {
    padding: 100px 24px 0 24px;
  }

  @media screen and (max-width 480px) {
    padding: 100px 24px 0 24px;
  }
`;

export const ConnectRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col2'
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

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 0 10px 0;
  padding-right: 0;

  &:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px){
    width: 80px;
    height: 80px
  }
`;

export const IconLink = styled.a`
    text-decoration: none;
    color: #010101;
`;

export const ArrowUpward = styled(MdArrowUpward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowUp = styled(MdKeyboardArrowUp)`
  margin-left: 8px;
  font-size: 20px;
`;