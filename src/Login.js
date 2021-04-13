import Form from "./Form";
import JoblyApi from './api'

function Login({user, updateUser}) {

  async function login(data) {
    const { token } = await JoblyApi.login(data)
    updateUser(token);
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      <Form updateData={login} formElements={['username', 'password']}/>
    </div>
  );
}
export default Login;