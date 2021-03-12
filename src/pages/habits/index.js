import { useState } from "react";
import MyHabits from "./myHabits/";

const Habits = () => {
  const [noHabit, setNoHabit] = useState(true);

  return <>{noHabit && <MyHabits></MyHabits>}</>;
};

export default Habits;
