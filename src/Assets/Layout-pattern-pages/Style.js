import styled, { keyframes } from "styled-components";

const toRight = keyframes`
  0%{
    left:0;
    top:-266px;
  }
  25%{
    left:782px;
    top:-266px;
  }
  50%{
    left:782px;
    top:173px;
  }
  75%{
    left:0;
    top:173px;
  }
  100%{
    left:0;
    top:-266px;
  }
`;

const toLeft = keyframes`
  0%{
    right:0;
    top:173px;
  }
  25%{
    right:782px;
    top:173px;
  }
  50%{
    right:782px;
    top:-266px;
  }
  75%{
    right:0px;
    top:-266px;
  }
  100%{
    right:0;
    top:173px;
  }
`;

const colors1 = keyframes`
  0%{
    background-color: rgba(255, 220, 20, 0.65);
  }
  20%{
    background-color: rgba(172, 245, 27, 0.65);
  }
  40%{
    background-color: rgba(61, 242, 227, 0.65);
  }
  60%{
    background-color: rgba(165, 53, 240, 0.65);
  }
  80%{
    background-color: rgba(245, 49, 160, 0.65);
  }
  100%{
    background-color: rgba(240, 19, 23, 0.65);
  }
`;

const colors2 = keyframes`
  0%{
    background-color: rgba(245, 49, 160, 0.65);
  }
  20%{
    background-color: rgba(165, 53, 240, 0.65);
  }
  40%{
    background-color: rgba(61, 242, 227, 0.65);
  }
  60%{
    background-color: rgba(172, 245, 27, 0.65);
  }
  80%{
    background-color: rgba(255, 220, 20, 0.65);
  }
  100%{
    background-color: rgba(240, 19, 23, 0.65);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CircleTop = styled.div`
  border-radius: 100%;
  width: 578px;
  height: 578px;
  position: absolute;
  left: 0;
  top: -266px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.6);
  background-clip: padding-box;
  backdrop-filter: blur(15px);
  animation-name: ${toRight}, ${colors2};
  animation-iteration-count: infinite;
  animation-duration: 60s;
  animation-direction: normal, alternate;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
`;

export const CircleBottom = styled.div`
  border-radius: 100%;
  width: 578px;
  height: 578px;
  position: absolute;
  right: 0;
  top: 173px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  backdrop-filter: blur(15px);
  animation-name: ${toLeft}, ${colors1};
  animation-iteration-count: infinite;
  animation-duration: 60s;
  animation-direction: normal, alternate;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
`;

export const ContainerCreateCard = styled.div`
  width: 480px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px lightgray;
  border-radius: 10px;
  box-shadow: 2px 2px 20px lightgray;
  background-color: white;
  position: relative;
`;
