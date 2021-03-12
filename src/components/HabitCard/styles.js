import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: 8vh;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 50% 50%;

  div {
    height: 100%;

    p {
      margin: 0 0 0 3vw;
      text-align: left;
      font-size: 1.3rem;
    }
  }
`;
