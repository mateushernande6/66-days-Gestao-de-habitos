import { MainDiv, DivGroups, DivGroup, Title, Description } from "./styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ModalGroup from "../modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HaveGroupThunk } from "../../../store/modules/haveGroup/thunks";
const useStyles = makeStyles({
  root: {
    color: "black",
    border: 0,
    height: "26px",
    margin: "4px",
    padding: "0 30px",

    background: "#23b5b594",
    boxShadow: "0 3px 5px 2px rgb(105 220 255 / 30%)",
    borderRadius: "5px",
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
                <Title>
                  Name Group: <b>{value.name.toUpperCase()}</b>
                </Title>
                <Description>
                  <span>
                    Category: <i>{value.category.toUpperCase()}</i>
                  </span>
                  <div>{value.description}</div>
                  <div>USERS: {value.users.length}</div>

                  <Button
                    className={classes.root}
                    color="primary"
                    variant="contained"
                    onClick={() => handleJoin(value.id)}
                  >
                    Join
                  </Button>
                </Description>
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
