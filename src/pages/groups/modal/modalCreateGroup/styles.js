import styled from "styled-components";

export const ModalDiv = styled.div`
  background-color: #ededf6;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 15px;
  border-radius: 10px;
  margin: 0px;
  text-align: center;

  section {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: #ededf6;
  border-radius: 10px;

  div {
    width: 100%;
    text-align: left;
    padding: 3px;
    padding-top: 1px;
  }
  input {
    border-radius: 5px;
    padding: 3px;
    text-align: center;
  }
`;

export const CategoryDiv = styled.div`
  h2 {
    font-size: 19px;
    margin-bottom: -4px;
  }
  div {
    margin-bottom: 5px;
  }
`;
export const ErrorMessage = styled.div`
  background-color: #efd8dc;
  font-family: monospace;
  font-size: 9px;
  width: 104px;
  border-radius: 4px;
  margin: 2px;
`;
