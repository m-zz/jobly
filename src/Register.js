import Form from "./Form";
import JoblyApi from "./api"
import { useHistory } from "react-router";

function Register({ updateUser }) {
  const history = useHistory();
  
  async function register(data) {
    const { token } = await JoblyApi.register(data);
    updateUser(token);
    history.push('/')
  }
  
  return (
    <div className="Register">
      <h2 className="Header">Sign Up</h2>
      <Form
        updateData={register}
        formElements={["username", "password", "firstName", "lastName", "email"]} />
    </div>
  );
}
export default Register;