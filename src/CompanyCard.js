import { Link } from "react-router-dom";

function CompanyCard({ name, description, logoUrl, handle }) {
  
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <b>{name}</b>
        <p>{description}</p>
        <img src={logoUrl} alt={name}></img>
      </Link>
    </div>
  );
}
export default CompanyCard;