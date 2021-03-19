import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCard, Card } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getHabitsThunk } from "../../store/modules/getHabits/thunk";
import HabitCard from "../HabitCard/index";

const GetHabits = () => {
  const [open, setOpen] = useState(false);

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
        <HabitCard
          key={index}
          habit={item}
          panel={false}
          token={token}
        ></HabitCard>
      ))}
    </ContainerCard>
  );
};
export default GetHabits;
