import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

function List({ list, type }) {

  return (
    <div className="List">
      {type === "company"
        ? list.map(l => <CompanyCard key={l.handle} {...l} />)
        : list.map(l => <JobCard key={l.id} {...l} />)
      }
    </div>
  );
}
export default List;