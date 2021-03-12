import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/register";
import { useSelector } from "react-redux";
import GroupPage from "../../pages/GroupPage";

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
            <div>Tela de hábitos</div>
          </Route>

          <Route path="/dashboard">
            <div>Dashboard</div>
          </Route>

          <Route path="/group">
            <GroupPage />
          </Route>

          <Route path="/password-reset">
            <div>Alteração de senha</div>
          </Route>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default Routes;
