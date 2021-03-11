import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import GroupPage from "../pages/GroupPage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/home">
        <div>Hábitos</div>
      </Route>

      <Route path="/register">
        <div>Register</div>
      </Route>

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
    </Switch>
  );
};

export default Routes;
