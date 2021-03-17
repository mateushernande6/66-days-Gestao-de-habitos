import axios from "axios";
import { useEffect, useState } from "react";

const InfoModal = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("https://kabit-api.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data));
  }, []);

  console.log(habits);
  return (
    <>
      <div>Info Modal</div>
    </>
  );
};
export default InfoModal;
