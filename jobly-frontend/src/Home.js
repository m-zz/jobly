import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Home() {
  const { user } = useContext(UserContext)

  return (
    <div className="Home">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {user ? (
        <p>Welcome Back {user.username}!</p>
      ) : (
        <div>
          <Link to="/login">
            <button type="button" className="btn btn-primary">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Home;