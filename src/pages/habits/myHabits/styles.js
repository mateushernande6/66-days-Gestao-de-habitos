import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 85vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const StyledContentBox = styled.div`
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 30px;
  height: 90%;

  header {
    color: black;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 50% 20% 20%;
    column-gap: 2%;
    border-bottom: 1px solid #eef0f7;
    height: 10%;

    p {
      font-size: 16px;
      text-align: left;
      margin: 0;
      position: relative;
      top: 50%;
      left: 5%;
      transform: translateY(-15%);
    }

    select {
      height: 30%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  main {
    width: 98%;
    height: 90%;
    margin: 0 auto;
    overflow: auto;
  }
`;

// export const StyledContainer = styled.div`
//   width: 85vw;
//   height: 80vh;
//   display: grid;
//   grid-template-columns: 47.5% 47.5%;
//   grid-template-rows: 95% 5%;
//   column-gap: 5%;
// `;

// export const StyledContentBox = styled.div`
//   background-color: white;
//   border: 1px solid black;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   margin-bottom: 30px;
//   display: grid;
//   grid-template-rows: 10% 90%;

//   header {
//     color: black;
//     box-sizing: border-box;
//     display: grid;
//     grid-template-columns: 50% 20% 20%;
//     column-gap: 2%;
//     border-bottom: 1px solid #eef0f7;

//     p {
//       font-size: 16px;
//       text-align: left;
//       margin: 0;
//       position: relative;
//       top: 50%;
//       left: 5%;
//       transform: translateY(-15%);
//     }

//     select {
//       height: 30%;
//       position: relative;
//       top: 50%;
//       transform: translateY(-50%);
//     }
//   }

//   main {
//     width: 98%;
//     height: 90%;
//     margin: 0 auto;
//     overflow: auto;
//   }
// `;
