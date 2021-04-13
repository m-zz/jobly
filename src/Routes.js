import { Route, Switch } from "react-router";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";

function Routes({user, updateUser}) {
  return (
    <Switch>
      <Route exact path="/"><Home user={user}/></Route>
      <Route exact path="/login"><Login updateUser={updateUser}/></Route>
      <Route exact path="/register"><Register user={user} updateUser={updateUser}/></Route>
      <Route exact path="/companies"><Companies user={user}/></Route>
      <Route path="/companies/:handle"><CompanyDetails user={user}/></Route>
      <Route exact path="/jobs"><Jobs user={user}/></Route>
      <Route exact path="/profile"><Profile user={user}/></Route>
    </Switch>
  );
}
export default Routes;