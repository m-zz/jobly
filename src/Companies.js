import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import JoblyApi from './api';

function Companies() {
  
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const resp = await JoblyApi.getAllCompanies();
      setCompanies(resp);
    }
    getCompanies();
  }, [])

  async function submitSearch(searchTerms) {
    const resp = await JoblyApi.getAllCompanies(searchTerms);
    setCompanies(resp);
  }

  
  return (
    <div className="Companies">
      {/* make ternary for loading spinner */}
      {companies && (
        <div>
          <div className="search-form">
            <Form updateData={submitSearch} formElements={["name", "minEmployees", "maxEmployees"]}
              defaultData={{ name: "", minEmployees: "0", maxEmployees: "10000000" }} live={true}/>
          </div>
          <List list={companies} type="company"/>
      </div>)}
      
    </div>
  );
}
export default Companies;