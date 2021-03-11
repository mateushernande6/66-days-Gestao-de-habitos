import { MainDiv, DivGroups, DivGroup, Title, Description } from "./styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ModalDiv } from "../modal/modalCreateGroup/styles";
import ModalGroup from "../modal";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #8aeb91 30%, #86e78e 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 26,
    padding: "0 30px",
    margin: "4px",
  },
});
const ShowGroups = ({ groupList, children }) => {
  const classes = useStyles();
  return (
    <MainDiv>
      <ModalGroup />

      <DivGroups>
        <h1>Grupos Disponiveis:</h1>
        {groupList.map((item, index) => (
          <div key={index}>
            {item.map((value, index) => (
              <DivGroup key={index}>
                <Title>{value.name}</Title>
                <Description>
                  <span>Category: {value.category} Description</span>
                  <div>{value.description}</div>
                </Description>
                <div>
                  Users: {value.users.length}
                  <Button
                    className={classes.root}
                    color="primary"
                    variant="contained"
                  >
                    Join
                  </Button>
                </div>
              </DivGroup>
            ))}
          </div>
        ))}
      </DivGroups>
      {children}
    </MainDiv>
  );
};

export default ShowGroups;
