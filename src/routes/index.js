import { Switch, Route } from "react-router-dom";
import CreateHabit from "../pages/CreateHabit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div>Login</div>
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
        <div>Tela de grupos</div>
      </Route>

      <Route path="/password-reset">
        <div>Alteração de senha</div>
      </Route>

      <Route path="/make-habit">
        <CreateHabit />
      </Route>
    </Switch>
  );
};

export default Routes;
