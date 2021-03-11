import axios from "axios";
import { useState, useEffect } from "react";
import ShowGroups from "./showGroups";
const Groups = () => {
  const [listGroup, setListGroup] = useState([]);
  const [nextUrl, setUrl] = useState("https://kabit-api.herokuapp.com/groups/");
  const [moreGroups, setMoreGroups] = useState(true);
  const getGroups = (url) => {
    if (moreGroups) {
      axios.get(url).then((response) => {
        const groupPage = response.data.results;
        console.log(response);
        setListGroup([...listGroup, groupPage]);
        console.log(listGroup);
        const nextPage = response.data.next;
        if (nextPage == null) {
          setMoreGroups(false);
        }
        setUrl(nextPage);
      });
    }
  };
  useEffect(() => {
    getGroups(nextUrl);
  }, []);

  return (
    <div>
      <ShowGroups groupList={listGroup} />
      <button onClick={() => getGroups(nextUrl)}>More Groups</button>
    </div>
  );
};

export default Groups;
