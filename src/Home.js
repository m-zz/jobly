import { Link } from 'react-router-dom';

function Home({user}) {
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