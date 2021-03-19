import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHabitsThunk } from "../../store/modules/getHabits/thunk";
import CreateHabit from "../CreateHabit";
import MyHabits from "./myHabits/";

const Habits = () => {
  const myHabits = useSelector((state) => state.getHabits);
  const dispatch = useDispatch();
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || "";
  });

  useEffect(() => {
    dispatch(getHabitsThunk(token));
  }, []);

  return myHabits && myHabits.length === 0 ? <CreateHabit /> : <MyHabits />;
};

export default Habits;
