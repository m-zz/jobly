import { useContext } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function JobCard({ id, title, companyName, salary, equity, apps }) {
  const { user } = useContext(UserContext);

  function handleClick(evt) {
    //toggle apply
    if (!evt.target.classList.contains("btn-danger")) {
      JoblyApi.unapply(user.username, id);
      evt.target.innerHTML = "Apply";
    } else {
      JoblyApi.applyToJob(user.username, id);
      evt.target.innerHTML = "Applied";
    }
    evt.target.classList.toggle("btn-danger");
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
        className={apps.has(id) ? "btn btn-success" : "btn btn-success btn-danger"}>{apps.has(id) ? "Applied" : "Apply"}</button>
    </div>
  );
}
export default JobCard;