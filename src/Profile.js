import { useEffect, useState } from 'react';
import JoblyApi from './api';
import Form from './Form';

function Profile({ user }) {
  const [updated, setUpdated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect( ()=> {
    async function getDetails() {

      const userResults =  await JoblyApi.getUser(user)
      setUserDetails(userResults);
    }
    getDetails()
  },[])
  
  

  function handleUpdate(formData) {
    console.log(user.token)
    JoblyApi.update(formData);
    setUpdated(true);
  }

  return (
    <div>
      {userDetails
        ? (
          <div className="Profile">
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
          </div>
        )
        : <p>None</p>
      }
    </div>
    
    
  );
}
export default Profile;