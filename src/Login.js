import Form from "./Form";
import JoblyApi from './api'

function Login({user, updateUser}) {

  function login(data){
    const logUser = JoblyApi.login(data)
    updateUser(logUser)
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      <Form updateData={login} formElements={['username', 'password']}/>
    </div>
  );
}
export default Login;