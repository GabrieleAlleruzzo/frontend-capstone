import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteCommissioni } from "../API/api.js";

const CardCommissione = ({
  id,
  name,
  surname,
  tipoProg,
  year,
  token,
  funzione,
}) => {
  return (
    <>
      <div className="cool-hover mt-4 ">
        <div className="pb-4 p-2">
          <Link to={`/progettocommissione/${id}`} className="">
            <h6 className="text-uppercase type-p"> {tipoProg} </h6>
            <h3 className="">
              {name} {surname}
            </h3>
          </Link>
          <span className="d-flex justify-content-between">
            <i className="">{year}</i>
            <i
              className="bi bi-trash-fill pe-2"
              onClick={async () => {
                await DeleteCommissioni(id, token);
                await funzione();
              }}
            ></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardCommissione;
