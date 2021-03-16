import styled from "styled-components";

export const HeaderDashboard = styled.div`
  width: 80vw;
  padding: 5px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
`;
export const InfoHeader = styled.div`
  width: 60%;
  height: 40px;
  border: 0.5px solid black;
  border-radius: 5px;

  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const DashTitle = styled.div`
  width: 80vw;
  height: 60px;
  font-family: "Russo One", sans-serif;
  font-size: 1.8rem;
  color: black;
  text-align: left;
  line-height: 94px;
`;

export const UserInfo = styled.div`
  color: black;
  font-family: "Roboto", sans-serif;
  width: 39%;

  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContainerGraphic = styled.div`
  width: 80vw;
  height: 400px;
  background-color: white;
  color: black;
  margin-top: 20px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .containerTitle {
    width: 100%;
    height: 40px;
    h2 {
      margin-bottom: 0;
    }
  }
  .graphic {
    width: 40%;
    box-sizing: border-box;
    margin-top: 60px;
  }
  .infos {
    width: 40%;
    box-sizing: border-box;
    margin-top: 40px;
  }

  .fixGraphic {
    position: relative;
    color: #8080804a;
  }
  .theGraphic {
    position: relative;
    bottom: 205px;
    color: #0db9eeb5;
  }
`;
