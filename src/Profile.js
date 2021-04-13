import Form from './Form';

function Profile({user}) {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <b>Username</b>
      <p>{user.username}</p>
      <Form
        formElements={["firstName", "lastName", "email", "password"]}
        defaultData={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: ""
        }}
      />
    </div>
  );
}
export default Profile;