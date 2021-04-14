import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ user, removeUser }) {

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
          <a onClick={logout}>Logout</a>
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