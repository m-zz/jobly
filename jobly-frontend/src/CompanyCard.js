import { Link } from "react-router-dom";

function CompanyCard({ name, description, logoUrl, handle }) {
  
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <div>
          <img src="https://photoadking.s3.amazonaws.com/photoadking/webp_thumbnail/5e70652c6b5ae_template_image_1584424236.webp" alt={name}></img>
          <b>{name}</b>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
export default CompanyCard;