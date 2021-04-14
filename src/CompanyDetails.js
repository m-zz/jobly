import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JoblyApi from "./api";
import List from './List';

function CompanyDetails({ user }) {
  const { handle } = useParams();
  const [cDetails, setCDetails] = useState(null);
  // async function to grab jobs for company
  // !! does the useEffect happen before the first render?
  useEffect(() => {
    //axios get jobs
    async function validCompanyGetDetails() {
      const company = await JoblyApi.getCompany(handle);
      console.log(company)
      if (company) {
        setCDetails(company);
      }
    }
    validCompanyGetDetails();
  }, []);

  console.log(cDetails)

  return (
    <div>
      {cDetails
        ? (<div className="CompanyDetails">
            <h2>{cDetails.name}</h2>
            <p>{cDetails.description}</p>
            <List list={cDetails.jobs} type="jobs" />
          </div>)
        : <p>Company does not exist</p>
      }
    </div>

  );
}
export default CompanyDetails;