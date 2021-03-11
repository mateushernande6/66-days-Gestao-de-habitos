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

const CreateHabit = () => {
  const classes = useStyles();

  return (
    <Container>
      {/* <Menu /> */}
      <P>What habit do you want to acquire?</P>
      <Divider />
      <ContainerCreateHabit>
        <H1>You have no registered habits</H1>
        <H3> Start to register a habit right now</H3>
        <Button variant="outlined" className={classes.root}>
          Make a habit
        </Button>
      </ContainerCreateHabit>
    </Container>
  );
};

export default CreateHabit;
