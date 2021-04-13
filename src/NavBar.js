import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ user, updateUser }) {

  function logout() {
    updateUser(null);
  }

  if(user){
    return (
      <nav className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <a onClick={logout}>Logout</a>
      </nav>
    )
  }
  
  return (
    <nav className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
}
export default NavBar;