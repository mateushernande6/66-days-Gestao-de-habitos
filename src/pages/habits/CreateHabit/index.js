import { Button } from "@material-ui/core";
import {
  Container,
  ContainerCreateHabit,
  Divider,
  H1,
  H3,
  P,
  useStyles,
} from "./Style";
import Menu from "../../../components/Menu/index";
import { useHistory } from "react-router-dom";

const CreateHabit = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleToRegisterHabit = () => {
    history.push("/register-habit");
  };

  return (
    <Container>
      <P>What habit do you want to acquire?</P>
      <Divider />
      <ContainerCreateHabit>
        <H1>You have no registered habits</H1>
        <H3> Start to register a habit right now</H3>
        <Button
          variant="outlined"
          className={classes.root}
          onClick={handleToRegisterHabit}
        >
          Make a habit
        </Button>
      </ContainerCreateHabit>
    </Container>
  );
};

export default CreateHabit;
