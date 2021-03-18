import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 10vw;
  min-width: 30px;
  max-width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #d7e1ec 0%, #fff 74%);
  padding: 2vh 0;
  box-sizing: border-box;

  img {
    width: 60%;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 100px;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
    }
  }
`;
