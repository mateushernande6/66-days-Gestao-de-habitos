import styled from "styled-components";
import { ContainerCreateCard } from "../../Assets/Layout-pattern-pages/Style";

export const ShowContent = styled(ContainerCreateCard)`
  height: 95vh;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;

  button {
    font-size: 1.4rem;
    padding: 15px;
  }
  button:hover {
    background-color: #5cd8b6e6;
  }
`;
