import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";
import jwt from 'jsonwebtoken';

function JoblyApp() {
  const [user, setUser] = useState(null);

  function updateUser(token){
    setUser({token, ...jwt.decode(token)});
  }

  return (
    <BrowserRouter>
      <div className="JoblyApp">
        <NavBar updateUser={updateUser} user={user}/>
        <Routes updateUser={updateUser} user={user}/>
      </div>
    </BrowserRouter>
  );
}
export default JoblyApp;