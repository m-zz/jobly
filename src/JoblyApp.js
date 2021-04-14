import { useState } from "react";
import NavBar from "./NavBar";
import Routes from "./Routes";
import jwt from 'jsonwebtoken';
import { useHistory } from "react-router";
import "./JoblyApp.css";

function JoblyApp() {
  const history = useHistory();
  const [user, setUser] = useState(null);

  function updateUser(token) {
    setUser({ token, ...jwt.decode(token) });
    history.push('/');
  }

  function removeUser() {
    setUser(null);
    history.push('/');
  }

  return (
    <div className="JoblyApp">
      <NavBar removeUser={removeUser} user={user} />
      <div className="JoblyContent">
        <Routes updateUser={updateUser} user={user} />
      </div>
    </div>
  );
}
export default JoblyApp;