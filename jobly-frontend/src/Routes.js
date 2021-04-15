import { Redirect, Route, Switch } from "react-router";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import { useContext } from "react";
import UserContext from "./UserContext";

function Routes() {
  const { user } = useContext(UserContext);

  // !!how does our redirect look?

  return (
    <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/companies/:handle">{() => user ? <CompanyDetails /> : <Redirect to="/" />}</Route>
      <Route path="/companies">{() => user ? <Companies /> : <Redirect to="/" />}</Route>
      <Route path="/jobs">{() => user ? <Jobs /> : <Redirect to="/" />}</Route>
      <Route path="/profile">{() => user ? <Profile /> : <Redirect to="/" />}</Route>
      <Route path="/"><Home /></Route>
    </Switch>
  );
}
export default Routes;