import Form from "./Form";
import JoblyApi from "./api"

function Register({ updateUser }) {
  
  async function register(data) {
    const { token } = await JoblyApi.register(data);
    updateUser(token);
  }
  
  return (
    <div className="Register">
      <Form
        updateData={register}
        formElements={["username", "password", "firstName", "lastName", "email"]} />
    </div>
  );
}
export default Register;