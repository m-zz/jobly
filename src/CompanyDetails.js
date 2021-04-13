import { useEffect, useState } from "react";
import { useParams } from "react-router";
import List from './List';

function CompanyDetails({user}) {
  const { handle } = useParams();
  const [cDetails, setCDetails] = useState();
  // async function to grab jobs for company
  useEffect(() => {
    //axios get jobs

  }, []);



  return (
    <div className="CompanyDetails">
      <h2>{cDetails.name}</h2>
      <h1>{cDetails.description}</h1>
      <List jobs={cDetails.jobs} type="jobs"/>
    </div>
  );
}
export default CompanyDetails;