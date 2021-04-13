import { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";
import JoblyApi from "./api";

function Jobs({ user }) {
  const [jobs, setJobs] = useState();

  function submitSearch(searchTerm) {
    //do something with searchterm
  }

  useEffect(() => {
    console.log("in useEffect");
    async function getJobs() {
      const resp = await JoblyApi.getAllJobs();
      console.log(resp);
      setJobs(resp);
    }
    getJobs();
  }, []);


  return (
    <div className="Jobs">
      {jobs && (
        <div>
          <Search submitSearch={submitSearch} />
          <List list={jobs} type="job" />
        </div>
      )}
    </div>
  );
}
export default Jobs;
