import { useContext } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function JobCard({ id, title, companyName, salary, equity, apps }) {
  const { user } = useContext(UserContext);

  function handleClick(evt) {
    JoblyApi.applyToJob(user.username, id);
    evt.target.classList.add("disabled");
    evt.target.innerHTML = "Applied";
  }

  return (
    <div className="JobCard">
      <b>{title}</b>
      <p>{companyName}</p>
      <small>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
      </small>
      <button onClick={handleClick}
        className={apps.has(id) ? "btn btn-danger disabled" : "btn btn-danger"}>{apps.has(id) ? "Applied" : "Apply"}</button>
    </div>
  );
}
export default JobCard;