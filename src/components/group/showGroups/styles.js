import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: #ededf6;
  width: 500px;
  padding: 10px;
  color: black;
  border-radius: 10px;
`;

export const DivGroups = styled.div`
  background-color: #ffffff;
  padding: 2px;
  border-radius: 10px;
`;

export const DivGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
`;

export const Description = styled.div`
  border-radius: 10px;
  width: 70%;
  background-color: #fff4f4;
  font-size: 1.2rem;
  padding: 10px;
  margin: 5px;
  span {
    border-bottom: 1px solid black;
    font-size: 1.4rem;
  }
  div {
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
  }
`;
export const Title = styled.div`
  border-bottom: 3px solid black;
  width: 98%;
  padding: 3px;
  font-size: 1.4rem;
`;
