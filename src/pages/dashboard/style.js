import styled, { keyframes } from "styled-components";
import checklist from "../../images/checklist.jpg";

export const HeaderDashboard = styled.div`
  width: 80vw;
  padding: 5px;
  padding-left: 9px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  z-index: 2;
`;
export const InfoHeader = styled.div`
  width: 60%;
  height: 40px;
  box-shadow: 154px 13px 86px black;
  border-radius: 5px;

  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;
export const DashTitle = styled.div`
  width: 80vw;
  height: 60px;
  font-family: "Russo One", sans-serif;
  font-size: 1.8rem;
  color: black;
  text-align: left;
  line-height: 94px;
  z-index: 2;
`;

export const UserInfo = styled.div`
  color: black;
  font-family: "Roboto", sans-serif;
  width: 39%;
  box-shadow: 123px 0 93px #bddad2;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 2;
`;

export const ContainerGraphic = styled.div`
  z-index: 2;
  width: 80vw;
  height: 400px;
  background-color: white;
  color: black;
  margin-top: 20px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .containerTitle {
    width: 100%;
    height: 40px;
    h2 {
      margin-bottom: 0;
      margin-top: 0;
      line-height: 40px;
      background-color: #bddad2;
      box-shadow: 0 75px 109px #bddad2;
    }
  }
  .graphic {
    width: 30%;
    box-sizing: border-box;
    margin-top: 60px;
    height: 250px;
    min-width: 300px;
    position: relative;
    .progressTxt {
      position: absolute;
      top: 64px;
      right: 126px;
    }
  }
  .infos {
    width: 55%;
    box-sizing: border-box;
    margin-top: 40px;
    height: 300px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    .titlePanel {
      margin-bottom: 8px;
    }
  }

  .fixGraphic {
    position: absolute;
    color: #8080804a;
    right: 80px;
  }
  .theGraphic {
    position: absolute;
    right: 80px;
    color: #0db9eeb5;
  }
`;

// ====================================================

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const CircleTop = styled.div`
  z-index: 1;
  border-radius: 100%;
  position: absolute;
  left: 3vw;
  top: 2vh;
  width: 250px;
  height: 250px;
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
  z-index: 1;
  border-radius: 100%;
  position: absolute;
  right: 3vw;
  bottom: 2vh;
  width: 250px;
  height: 250px;
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
