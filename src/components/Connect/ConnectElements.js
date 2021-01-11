import styled from 'styled-components';
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md';


export const ConnectContainer = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const ConnectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 860px
  }
`;

export const ConnectRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1 col1 col1' 'col2';
  };

  @media screen and (max-width: 480px) {
    grid-template-areas: 'col1 col1 col1 col1' 'col2';
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
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100%;
  margin-top: -70px;
`;

export const Img = styled.img`
  width: 55px;
  height: 55px;
  margin: 0 0 15px 0;
  padding-right: 0;


  @media screen and (max-width: 480px){
    width: 30px;
    height: 30px
  }

  &:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
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

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
<<<<<<< HEAD
`;

export const IconLink = styled.a`
    text-decoration: none;
    color: #010101;
`
=======
`;
>>>>>>> d91ecd1e4719ef0b96fe9a0821d6df329a00212f
