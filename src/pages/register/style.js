import styled, { keyframes } from "styled-components";
import login3 from "../../images/Login-images/login3.jpg";
import login2 from "../../images/Login-images/login2.jpg";
import login1 from "../../images/Login-images/login1.jpg";

const transitionBackground = keyframes`
  0%{
    background-image: url(${login3});
  }
  50%{
    background-image: url(${login2});
  }
  100%{
    background-image: url(${login1});
  }
`;

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${login3});
  background-position: center;
  background-size: cover;
  animation-name: ${transitionBackground};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.37, 0, 0.58, 1);
  animation-delay: 2s;
`;

export const ContainerTitle = styled.div`
  position: absolute;
  left: 239px;
  top: 296px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 190px;
`;

export const ContainerRegister = styled.div`
  position: absolute;
  right: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 440px;
  border-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.6);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-family: "Satisfy", cursive;
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: 15px;
  font-family: sans-serif;
`;

export const DivButton = styled.div`
  margin-top: 10px;
  .registerBtn {
    background-color: #23b5b5;
    margin-top: 10px;
    width: 200px;
    color: #283635;
    &:hover {
      background-color: #067979;
    }
  }
`;
export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #f34242;
`;

export const BackLogin = styled.a`
  outline: none;
  color: #283635;
  text-decoration: none;
  margin-top: 35px;
  transition-property: transform;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  cursor: pointer;
`;
