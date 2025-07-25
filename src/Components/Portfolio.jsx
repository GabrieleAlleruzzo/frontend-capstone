import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetAllProgettiProtfolio } from "../API/api";
import CardPortfolio from "./CardPortfolio";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GetAllProgettiProtfolio();
        setPortfolioData(data);
      } catch (err) {
        console.error("Errore nel recupero dei progetti:", err);
        setError("Impossibile caricare i progetti.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="min-h-screen">
      <Container className="">
        <Row className="justify-center">
          <Col xs={12}>
            <h2>Portfolio</h2>
            <p>Progetti d'identità visive.</p>
          </Col>
        </Row>
        <Row className="justify-center">
          {loading && (
            <Col xs={12} className="text-center py-10">
              <Spinner
                animation="border"
                role="status"
                className="text-blue-500 mt-5 "
              >
                <span className="sr-only"></span>
              </Spinner>
              <p className="mt-4 text-lg text-gray-700">Caricamento...</p>
            </Col>
          )}

          {error && (
            <Col xs={12} className="text-center py-10">
              <p className="text-red-600 text-lg">{error}</p>
            </Col>
          )}

          {!loading && !error && portfolioData.length === 0 && (
            <Col xs={12} className="text-center py-10">
              <p className="text-gray-700 text-lg">Nessun progetto trovato.</p>
            </Col>
          )}
          {!loading &&
            !error &&
            portfolioData.length > 0 &&
            portfolioData.map((progetto) => (
              <Col
                key={progetto.id}
                md={6}
                lg={4}
                className="mb-8 flex justify-center"
              >
                <CardPortfolio
                  id={progetto.id}
                  imageSrc={progetto.imgCopertina}
                  title={progetto.nomeProgetto}
                  description={progetto.descrizione}
                  year={new Date(progetto.data).getFullYear()}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
