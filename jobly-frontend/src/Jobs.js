import { useState, useEffect, useContext } from "react";
import Form from "./Form";
import List from "./List";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function Jobs() {
  const [jobs, setJobs] = useState();
  const [apps, setApps] = useState(null)
  const { user } = useContext(UserContext);


  useEffect(() => {
    async function getJobs() {
      const jobs = await JoblyApi.getAllJobs();
      const userResult = await JoblyApi.getUser(user);
      setApps(new Set(userResult.applications))
      setJobs(jobs);
    }
    getJobs();
  }, []);

  //

  async function submitSearch(searchTerms) {
    // search by equity and salary
    const resp = await JoblyApi.getAllJobs(searchTerms);
    setJobs(resp);
  }


  // maybe rework our form to accept an array of these: { name: label: type: value: validation:}
  return (
    <div className="Jobs">
      {/* Add spinner */}
      {jobs && (
        <div>
          <div className="search-form">
            <Form
              updateData={submitSearch}
              formElements={["title", "minSalary", "hasEquity"]}
              defaultData={{ title: "", minSalary: "1000000", hasEquity: true }}
              live={true}
            />
          </div>
          <List list={jobs} other={apps} type="job" />
        </div>
      )}
    </div>
  );
}
export default Jobs;
