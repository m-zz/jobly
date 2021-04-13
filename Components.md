App  
  
# Jobly 
    state: user 
    function: updateProfile, resetUser

   # Navbar
        props: user, resetUser

   # Routes
        props: user, updateProfile
     
        Home
          props: user
      
        Login
          props: user
          function: setUser (to backend)
            
            Form 
            props: formFields, submitAction
            function: updateForm, submitForm
            state: formValues
        
        Register
          props: user
          function: setUser (to backend)
            
            Form 
            props: formFields, submitAction
            function: updateForm, submitForm
            state: formValues
        
        Companies
          state: companyList
          props: user
          function: submitAction
            
            Search
              props: submitAction
              function: updateForm, submitForm
              state: formValues
            
            List 
              props: companyList, companyParams

              Card
                props: companyInfo

        Jobs 
          state: jobList
          props: user
          function: submitAction
            
            Search
              props: submitAction
              function: updateForm, submitForm
              state: formValues
          
            List 
              props: jobList, jobParams

                Card
                  props: jobInfo

        Profile 
          props: user, updateProfile 
          
            Form
              props: formFields, updateProfile
              function: updateForm, submitForm
              state: formValues


