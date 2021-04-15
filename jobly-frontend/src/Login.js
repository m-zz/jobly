import Form from "./Form";
import JoblyApi from './api';
import { useContext, useState } from "react";
import UserContext from "./UserContext";

function Login() {
  const { updateUser } = useContext(UserContext)
  const [errorMsg, setErrorMsg] = useState("");
 
  async function login(data) {
    try {
      const { token } = await JoblyApi.login(data);
      updateUser(token);
    } catch (e) {
      setErrorMsg(e[0]);
    }
  }

  return (
    <div className="Login default-content">
      <h2>Login</h2>
      {errorMsg && (
        <div class="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}
      <Form updateData={login} formElements={["username", "password"]} />
    </div>
  );
}
export default Login;