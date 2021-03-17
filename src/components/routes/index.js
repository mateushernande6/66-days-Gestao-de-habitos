import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/register";
import { useSelector } from "react-redux";
import Habits from "../../pages/habits";
// import CreateHabit from "../../pages/CreateHabit";
import RegisterHabit from "../../pages/RegisterHabit";
import GroupPage from "../../pages/GroupPage";
import Dashborad from "../../pages/dashboard";

const Routes = () => {
  const isLogged = useSelector((state) => state.logged);

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
      {isLogged ? (
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
            <div>Alteração de senha</div>
          </Route>

          {/* <Route path="/make-habit">
            <CreateHabit />
          </Route> */}

          <Route path="/register-habit">
            <RegisterHabit />
          </Route>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default Routes;
