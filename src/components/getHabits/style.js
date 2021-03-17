import styled from "styled-components";

export const ContainerCard = styled.div`
  height: 250px;
  overflow: auto;
`;

export const Card = styled.div`
  background-color: gray;
  border: 1px solid black;
  text-align: left;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  p {
    margin-top: 8px;
    margin-bottom: 3px;
    font-size: 0.9rem;
  }
`;
