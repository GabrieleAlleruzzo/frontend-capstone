import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Spinner,
  Button,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GetProgettoCommissioniId, DeleteCommissioni } from "../API/api.js";
import { AdminContext } from "./AdminProvider";

const ProgettoCommissione = () => {
  const useNavigatE = useNavigate();

  const { id } = useParams();

  const [commissionData, setCommissionData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { admin } = useContext(AdminContext);

  const getDMYFromDateString = (dateString) => {
    if (!dateString) {
      return "N.D.";
    }

    try {
      const date = new Date(dateString);

      if (!isNaN(date.getTime())) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
      }
    } catch (e) {
      console.error(
        "Errore nel parsing o formattazione della data nel frontend:",
        dateString,
        e
      );
    }
    return "N.D.";
  };

  useEffect(() => {
    const fetchProgettocommissioneProg = async () => {
      if (!id) {
        setError("ID progetto non fornito nell'URL.");
        setLoading(false);
        return;
      }
      try {
        if (id) {
          setLoading(true);
          setError(null);
          const data = await GetProgettoCommissioniId(id, admin);
          setCommissionData(data);
          console.log(data);
        }
      } catch (err) {
        console.error("Errore nel recupero dei progetti:", err);
        setError("Impossibile caricare i progetti. Riprova più tardi.");
      } finally {
        setLoading(false);
      }
    };
    fetchProgettocommissioneProg();
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          {loading && (
            <Col xs={12} className="text-center py-10">
              <Spinner
                animation="border"
                role="status"
                className="text-blue-500"
              >
                <span className="sr-only"></span>
              </Spinner>
              <p className="mt-4 text-lg text-gray-700">Caricamento ...</p>
            </Col>
          )}
          {error && (
            <Col xs={12} className="text-center py-10">
              <p className="text-red-600 text-lg">{error}</p>
            </Col>
          )}

          {!loading &&
            !error &&
            commissionData &&
            Object.keys(commissionData).length === 0 && (
              <Col xs={12} className="text-center py-10">
                <p className="text-gray-700 text-lg">Non trovato.</p>
              </Col>
            )}

          <Col>
            <h2 className="mb-3 text-uppercase">
              {commissionData.tipoProg &&
                commissionData.tipoProg.replace(/_/g, " ")}{" "}
              {getDMYFromDateString(commissionData.data)}
            </h2>

            {commissionData.descrizione &&
            commissionData.descrizione.includes(".")
              ? commissionData.descrizione
                  .split(".")
                  .map((item) => <p>{!item.trim() ? item : item + "."}</p>)
              : commissionData.descrizione}

            <p>
              {" "}
              Budget: <b>{commissionData.budget}€</b>
            </p>
            <hr className="my-4" />
            <ul className="my-4">
              <li>
                <b>
                  {commissionData.name} {commissionData.surname}
                </b>
              </li>
              <li>Tel: +39 {commissionData.tel}</li>
              <li>Email: {commissionData.email}</li>
            </ul>

            <Button
              className="border-2 border border-danger solid"
              variant="outline-danger"
              onClick={async () => {
                await DeleteCommissioni(id, admin);
                useNavigatE(-1);
              }}
            >
              <i class="bi bi-trash-fill "></i>Elimina
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgettoCommissione;
