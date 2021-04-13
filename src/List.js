import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

function List({ list, type }) {

  return (
    <div className="List">
      {type === "company"
        ? list.map(l => <CompanyCard {...l} />)
        : list.map(l => <JobCard {...l} />)
      }
    </div>
  );
}
export default List;