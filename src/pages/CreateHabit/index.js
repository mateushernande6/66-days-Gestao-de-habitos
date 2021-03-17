import { Button } from "@material-ui/core";
import { H1, H3, P, useStyles } from "./Style";
import {
  Container,
  ContainerCreateCard,
  CircleBottom,
  CircleTop,
} from "../../Assets/Layout-pattern-pages/Style";
import { useHistory } from "react-router-dom";

const CreateHabit = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleToRegisterHabit = () => {
    history.push("/register-habit");
  };

  return (
    <Container>
      <CircleTop />
      <CircleBottom />
      <ContainerCreateCard>
        <H1>You have no registered habits</H1>
        <H3> Start to register a habit right now</H3>
        <Button
          variant="outlined"
          className={classes.root}
          onClick={handleToRegisterHabit}
        >
          Make a habit
        </Button>
      </ContainerCreateCard>
    </Container>
  );
};

export default CreateHabit;
