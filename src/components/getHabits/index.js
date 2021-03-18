import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCard, Card } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getHabitsThunk } from "../../store/modules/getHabits/thunk";
import TransitionsModal from "../Modal";
import { Button } from "@material-ui/core";
import ModalDashboard from "../modalDashboard";
import HabitCard from "../HabitCard/index";

const GetHabits = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || "";
  });
  const dispatch = useDispatch();
  const getHabits = useSelector((state) => state.getHabits) || [];
  useEffect(() => {
    dispatch(getHabitsThunk(token));
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ContainerCard>
      {getHabits.map((item, index) => (
        <HabitCard key={index} habit={item} panel={false} token={token}>
          {/* <Card key={index}>
            <div>
              <h4>{item.title}</h4>
              <p>category: {item.category}</p>
              <p>
                Status:{" "}
                {item.how_much_achieved < 66 ? " in progress" : " completed"}
              </p>
            </div>
            <div>
              <Button
                className="btnInfo"
                variant="contained"
                onClick={handleOpen}
              >
                Info
              </Button>
            </div>
          </Card>
          <ModalDashboard open={open} handleClose={handleClose} habit={item} /> */}
        </HabitCard>
      ))}
    </ContainerCard>
  );
};
export default GetHabits;
