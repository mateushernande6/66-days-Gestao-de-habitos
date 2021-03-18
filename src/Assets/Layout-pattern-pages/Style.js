import styled, { keyframes } from "styled-components";
import checklist from "../../images/checklist.jpg";

const toRight = keyframes`
  0%{
    left: 3vw;
    top: 2vh;
  }
  25%{
    left:65vw;
    top: 2vh;
  }
  50%{
    left:65vw;
    top:48vh;
  }
  75%{
    left:3vw;
    top:48vh;
  }
  100%{
    left: 3vw;
    top: 2vh;
  }
`;

const toLeft = keyframes`
 0%{
    right:3vw;
    bottom:2vh;
  }
  25%{
    right:65vw;
    bottom: 2vh;
  }
  50%{
    right:65vw;
    bottom:48vh;
  }
  75%{
    right:3vw;
    bottom:48vh;
  }
  100%{
    right: 3vw;
    bottom: 2vh;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${checklist});
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CircleTop = styled.div`
  border-radius: 100%;
  position: absolute;
  left: 3vw;
  top: 2vh;
  width: 378px;
  height: 378px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background: rgba(143, 194, 193, 0.3);
  background-clip: padding-box;
  backdrop-filter: blur(15px);
  animation-name: ${toRight};
  animation-iteration-count: infinite;
  animation-duration: 60s;
  animation-direction: normal, alternate;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
`;

export const CircleBottom = styled.div`
  border-radius: 100%;
  position: absolute;
  right: 3vw;
  bottom: 2vh;
  width: 378px;
  height: 378px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  background: rgba(143, 194, 193, 0.3);
  background-clip: padding-box;
  backdrop-filter: blur(15px);
  animation-name: ${toLeft};
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
  position: absolute;
`;
