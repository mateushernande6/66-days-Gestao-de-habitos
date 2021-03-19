import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/register";
import { useSelector } from "react-redux";
import Habits from "../../pages/habits";
import CreateHabit from "../../pages/CreateHabit";
import RegisterHabit from "../../pages/RegisterHabit";
import GroupPage from "../../pages/GroupPage";
import Dashborad from "../../pages/dashboard";
import UpdateUser from "../../pages/updateUser";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Routes = () => {
  const isLogged = useSelector((state) => state.logged);
  const token = JSON.parse(localStorage.getItem("token"));

  const [local, setLocal] = useState("");

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      setLocal(location.pathname);
    }, [location]);
  }

  usePageViews();
  console.log("route local", typeof local);
  return (
    <Switch>
      {isLogged && token ? (
        <>
          <Route path="/home">
            <Habits />
          </Route>

          <Route path="/dashboard">
            <Dashborad />
          </Route>

          <Route path="/group">
            <GroupPage />
          </Route>

          <Route path="/password-reset">
            <UpdateUser />
          </Route>

          <Route path="/make-habit">
            <CreateHabit />
          </Route>

          <Route path="/register-habit">
            <RegisterHabit />
          </Route>
        </>
      ) : isLogged === false ||
        (!token && local === "/") ||
        local === "/register" ||
        local === "" ? (
        <>
          <Redirect to="/" />
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </>
      ) : (
        local === "/" || (local === "" && token && <Redirect to="/dashboard" />)
      )}
    </Switch>
  );
};

export default Routes;
