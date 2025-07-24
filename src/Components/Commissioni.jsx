import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { GetAllProgettiCommissioni } from "../API/api";
import CardCommissione from "./CardCommissione";

import { AdminContext } from "./AdminProvider";

const Commissioni = () => {
  const [commissioniData, setCommissioniData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const fetchCommissioni = async () => {
    if (!admin) {
      setError("Autenticazione richiesta per visualizzare le commissioni.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await GetAllProgettiCommissioni(admin);
      setCommissioniData(data);
    } catch (err) {
      console.error("Errore nel recupero delle commissioni:", err);

      if (err.response && err.response.status === 403) {
        setError(
          "Non autorizzato a visualizzare le commissioni. Effettua il login."
        );
      } else {
        setError("Impossibile caricare le commissioni. Riprova più tardi.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommissioni();
  }, [admin]);

  return (
    <div className="">
      <Container className="">
        <h2 className="mb-5">Commissioni</h2>

        <Row className="justify-center">
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

          {!loading && !error && commissioniData.length === 0 && (
            <Col xs={12} className="text-center py-10">
              <p className="text-gray-700 text-lg">
                Nessuna commissione trovata.
              </p>
            </Col>
          )}

          {!loading &&
            !error &&
            commissioniData.length > 0 &&
            commissioniData.map((commissione) => (
              <Col
                key={commissione.id}
                xs={12}
                md={6}
                lg={4}
                className="mb-8 flex justify-center"
              >
                <CardCommissione
                  funzione={fetchCommissioni}
                  id={commissione.id}
                  token={admin}
                  name={commissione.name}
                  surname={commissione.surname}
                  tipoProg={commissione.tipoProg}
                  year={getDMYFromDateString(commissione.data)}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Commissioni;
