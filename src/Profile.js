import { useContext, useEffect, useState } from 'react';
import JoblyApi from './api';
import Form from './Form';
import UserContext from './UserContext';

function Profile() {
  const [updated, setUpdated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { user } = useContext(UserContext)

  useEffect( ()=> {
    async function getDetails() {

      const userResults = await JoblyApi.getUser(user)
      setUserDetails(userResults);
    }
    getDetails()
  },[])


  function handleUpdate(formData) {
    JoblyApi.update(formData, user.username);
    setUpdated(true);
  }

  return (
    <div>
      {userDetails
        ? (
          <div className="Profile default-content">
            {updated && <p style={{ color: "blue" }}>updated!</p>}
            <h1>Profile</h1>
            <b>Username</b>
            <p>{userDetails.username}</p>
            <Form
              updateData={handleUpdate}
              formElements={["firstName", "lastName", "email", "password"]}
              defaultData={{
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                password: ""
              }}
            />
          </div>)
        : <p>None</p>
      }
    </div>
    
    
  );
}
export default Profile;