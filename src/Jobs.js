import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import JoblyApi from "./api";
import { Redirect } from "react-router";

function Jobs({ user }) {
  const [jobs, setJobs] = useState();


  useEffect(() => {
    async function getJobs() {
      const resp = await JoblyApi.getAllJobs();
      setJobs(resp);
    }
    getJobs();
  }, []);

  async function submitSearch(searchTerms) {
    // search by equity and salary
    const resp = await JoblyApi.getAllJobs(searchTerms);
    setJobs(resp);
  }

  // !! is this the best way to do this?
  if (!user) return <Redirect to='/login' />


  // maybe rework our form to accept an array of these: { name: label: type: value: validation:}
  return (
    <div className="Jobs">
      {/* Add spinner */}
      {jobs && (
        <div>
          <Form updateData={submitSearch} formElements={["title", "minSalary", "hasEquity"]}
            defaultData={{ title: "", minSalary: "1000000", hasEquity: "true" }} />
          <List list={jobs} type="job" />
        </div>
      )}
    </div>
  );
}
export default Jobs;
