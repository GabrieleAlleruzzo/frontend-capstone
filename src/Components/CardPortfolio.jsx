import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPortfolio = ({ id, imageSrc, title, description, year }) => {
  return (
    <div className="block cool-hover  w-full mt-4">
      <Link to={`/progettoportfolio/${id}`} className="-hover">
        <img
          className="w-100"
          src={imageSrc}
          alt={`Cover del progetto ${title}`}
          onError={(e) => {
            e.target.onerror = null;
          }}
        />
        <div className="pb-4 p-2">
          <h3 className="pt-2 fw-bold">{title}</h3>
          <p className="mb-2">
            {description.slice(0, 100)}
            {" ..."}
          </p>
          <i className="data-portfolio">{year}</i>
        </div>
      </Link>
    </div>
  );
};

export default CardPortfolio;
