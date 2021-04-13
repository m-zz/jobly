function JobCard({ title, companyName, salary, equity }) {
  
  return (
    <div className="JobCard">
      <b>{title}</b>
      <p>{companyName}</p>
      <small>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
      </small>
      <button>Apply</button>
    </div>
  );
}
export default JobCard;