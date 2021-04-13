import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";

function JoblyApp() {
  const [user, setUser] = useState(null);

  function updateUser(user){
    setUser(user);
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