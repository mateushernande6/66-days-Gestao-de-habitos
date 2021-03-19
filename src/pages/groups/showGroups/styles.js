import styled from "styled-components";
import { ContainerCreateCard } from "../../../Assets/Layout-pattern-pages/Style";

export const MainDiv = styled.div`
  background-color: #ededf6;
  top: 0px;
  width: 500px;
  padding: 10px;
  padding-top: 0px;
  margin-top: 0px;
  color: black;
  box-shadow: 2px 2px 4px #000000e0;
  position: absolute;
`;

export const DivGroups = styled.div`
  background-color: #ffffff;
  padding: 2px;
  border-radius: 10px;
`;

export const DivGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
`;

export const Description = styled.div`
  border-radius: 5px;
  width: 87%;
  background-color: #bddad236;
  font-size: 2.2rem;
  border: 1px solid #00000073;
  box-shadow: 0px 2px 5px #000000e0;
  padding: 13px;
  margin: 20px;
  span {
    border-bottom: 1px solid black;
    font-size: 1.4rem;
  }
  div {
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
  }
  button span {
    border-bottom: none;
    margin: 0px;
  }
  button:hover {
    background-color: #5cd8b6e6;
  }
`;
export const Title = styled.div`
  width: 98%;
  padding: 3px;
  font-size: 1.4rem;
  color: #1541cc;
  b {
    color: black;
  }
`;
