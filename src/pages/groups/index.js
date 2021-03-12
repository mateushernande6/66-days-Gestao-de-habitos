import axios from "axios";
import { useState, useEffect } from "react";
import ShowGroups from "./showGroups";
import { makeStyles } from "@material-ui/core/styles";

import { ShowContent } from "./styles";
import Button from "@material-ui/core/Button";
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
const Groups = () => {
  const classes = useStyles();

  const [listGroup, setListGroup] = useState([]);
  const [nextUrl, setUrl] = useState("https://kabit-api.herokuapp.com/groups/");
  const [moreGroups, setMoreGroups] = useState(true);
  const [loadPage, setLoad] = useState(false);
  const getGroups = async (url) => {
    if (moreGroups) {
      await axios.get(url).then((response) => {
        const groupPage = response.data.results;
        console.log(response);
        setListGroup([...listGroup, groupPage]);
        console.log(listGroup);
        const nextPage = response.data.next;
        if (nextPage == null) {
          setMoreGroups(false);
        }
        setUrl(nextPage);
        setLoad(true);
      });
    }
  };
  useEffect(() => {
    getGroups(nextUrl);
  }, []);

  return (
    <>
      {loadPage && (
        <ShowContent>
          <ShowGroups groupList={listGroup}>
            <Button
              onClick={() => getGroups(nextUrl)}
              className={classes.root}
              color="primary"
              variant="contained"
            >
              More Groups
            </Button>
          </ShowGroups>
        </ShowContent>
      )}
    </>
  );
};

export default Groups;
