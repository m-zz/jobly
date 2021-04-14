import { Redirect, Route, Switch } from "react-router";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";

function Routes({ user, updateUser }) {

  return (
    <Switch>
      <Route path="/login">{() => user ? <Login updateUser={updateUser} /> : <Redirect to="/" />}</Route>
      <Route path="/register"><Register user={user} updateUser={updateUser} /></Route>
      <Route path="/companies/:handle"><CompanyDetails user={user} /></Route>
      <Route path="/companies"><Companies user={user} /></Route>
      <Route path="/jobs"><Jobs user={user} /></Route>
      <Route path="/profile"><Profile user={user} /></Route>
      <Route path="/"><Home user={user} /></Route>
    </Switch>
  );
}
export default Routes;