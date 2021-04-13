import { useEffect, useState } from 'react';
import Search from './Search';
import List from './List';
import JoblyApi from './api';

function Companies({user}) {
  
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log("in useEffect")
    async function getCompanies() {
      const resp = await JoblyApi.getAllCompanies();
      console.log(resp);
      setCompanies(resp);
    }
    getCompanies();
  }, [])

  function submitSearch(searchTerm) {
    //do something with searchterm
  }
  
  return (
    <div className="Companies">
      {companies && (<div><Search submitSearch={submitSearch}/>
      <List list={companies} type="company"/></div>)}
      
    </div>
  );
}
export default Companies;