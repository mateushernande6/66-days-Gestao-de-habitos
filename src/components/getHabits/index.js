import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCard, Card } from "./style";
import StandardModal from "../modal";
import InfoModal from "./infoModal";

const GetHabits = () => {
  const [habits, setHabits] = useState([]);
  const [progress, setProgress] = useState(0);

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
      <ContainerCard>
        {habits.map((item, index) => (
          <Card key={index}>
            <div>
              <h4>{item.title}</h4>
              <p>category: {item.category}</p>
              <p>
                Status:{" "}
                {item.how_much_achieved < 66 ? " in progress" : " completed"}
              </p>
            </div>
            <div>
              <StandardModal
                buttonTxt="Info"
                buttonHeight={40}
                buttonMargin={20}
              >
                <InfoModal />
              </StandardModal>
            </div>
          </Card>
        ))}
      </ContainerCard>
    </>
  );
};
export default GetHabits;
