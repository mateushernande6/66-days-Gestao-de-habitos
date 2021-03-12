import { MainDiv, DivGroups, DivGroup, Title, Description } from "./styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ModalGroup from "../modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HaveGroupThunk } from "../../../store/modules/haveGroup/thunks";
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
  const dispatch = useDispatch();

  const handleJoin = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post(`https://kabit-api.herokuapp.com/groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        dispatch(HaveGroupThunk(true));
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <MainDiv>
      <ModalGroup />

      <DivGroups>
        <h1>Available Groups:</h1>
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
                    onClick={() => handleJoin(value.id)}
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
