import { useContext } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function JobCard({ id, title, companyName, salary, equity, apps }) {
  const { user } = useContext(UserContext);

  function handleClick(evt) {
    
    if (evt.target.classList.contains("applied")) {
      JoblyApi.unapply(user.username, id);
      evt.target.innerHTML = "Apply"
      evt.target.classList.replace("btn-success", "btn-danger");
    } else {
      JoblyApi.applyToJob(user.username, id);
      evt.target.innerHTML = "Applied";
      evt.target.classList.replace("btn-danger", "btn-success");
    }
    evt.target.classList.toggle("applied");
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
        className={apps.has(id) ? "btn btn-success applied" : "btn btn-danger"}>{apps.has(id) ? "Applied" : "Apply"}</button>
    </div>
  );
}
export default JobCard;