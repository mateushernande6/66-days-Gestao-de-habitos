import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 10vw;
  min-width: 30px;
  max-width: 90px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(230, 230, 230, 1) 0%,
    rgba(190, 190, 190, 1) 60%,
    rgba(150, 150, 150, 1) 100%
  );
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
