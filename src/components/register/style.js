import styled from "styled-components";

export const DivLogo = styled.div`
  height: 250px;
`;

export const DivButton = styled.div`
  margin-top: 10px;
  .registerBtn {
    background-color: #23b5b5;
    margin-top: 10px;
    width: 200px;
    color: #283635;
    &:hover {
      background-color: #067979;
    }
  }
`;
export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #f34242;
`;

export const BackLogin = styled.a`
  outline: none;
  color: #283635;
  text-decoration: none;
  margin-left: 145px;
  margin-top: 5px;
  margin-bottom: 30px;
  cursor: pointer;
`;
