import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";
import UserContext from './UserContext';

function NavBar() {
  const {user, removeUser} = useContext(UserContext)

  function logout() {
    removeUser();
  }

  if(user){
    return (
      <nav className="NavBar">
        <Link className="home" to="/">
          Home
        </Link>
        <div className="NavBarRight">
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <a className="logout" onClick={logout}>Logout</a>
        </div>
      </nav>
    );
  }
  
  return (
    <nav className="NavBar">
      <Link className="home" to="/">Home</Link>
      <div className="NavBarRight">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}
export default NavBar;