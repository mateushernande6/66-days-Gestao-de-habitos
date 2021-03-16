import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  width: 95%;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 3px 0;

  div {
    height: 100%;

    p {
      margin: 0 0 0 3vw;
      text-align: left;
      font-size: 1rem;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

// export const Card = styled.div`
//   box-sizing: border-box;
//   width: 95%;
//   border: 1px solid black;
//   border-radius: 10px;
//   color: black;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//   display: grid;
//   grid-template-columns: 50% 50%;
//   margin: 3px 0;

//   div {
//     height: 100%;

//     p {
//       margin: 0 0 0 3vw;
//       text-align: left;
//       font-size: 1rem;
//     }

//     div {
//       display: flex;
//       justify-content: space-around;
//       align-items: center;
//     }
//   }
// `;
