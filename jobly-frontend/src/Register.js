import Form from "./Form";
import JoblyApi from "./api"
import { useContext } from "react";
import UserContext from "./UserContext";

function Register() {
  const {updateUser} = useContext(UserContext)
  
  async function register(data) {
    const { token } = await JoblyApi.register(data);
    updateUser(token);
  }
  
  return (
    <div className="Register default-content">
      <h2>Sign Up</h2>
      <Form
        updateData={register}
        formElements={["username", "password", "firstName", "lastName", "email"]} />
    </div>
  );
}
export default Register;