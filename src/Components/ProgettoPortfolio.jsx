import { Container, Row, Col, Image, Card, Spinner } from "react-bootstrap";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
import { GetProgettoProtfolioId } from "../API/api.js";
import { useEffect, useState } from "react";

const ProgettoPortfolio = () => {
  const { id } = useParams();

  const [portfolioData, setPortfolioData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgettoPortfolio = async () => {
      if (!id) {
        setError("ID progetto non fornito nell'URL.");
        setLoading(false);
        return;
      }
      try {
        if (id) {
          setLoading(true);
          setError(null);
          const data = await GetProgettoProtfolioId(id);
          setPortfolioData(data);
          console.log(data);
        }
      } catch (err) {
        console.error("Errore nel recupero dei progetti:", err);
        setError("Impossibile caricare i progetti. Riprova più tardi.");
      } finally {
        setLoading(false);
      }
    };
    fetchProgettoPortfolio();
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

          {!loading &&
            !error &&
            portfolioData &&
            Object.keys(portfolioData).length === 0 && (
              <Col xs={12} className="text-center py-10">
                <p className="text-gray-700 text-lg">
                  Nessun progetto trovato.
                </p>
              </Col>
            )}

          <Col xs={12} md={6}>
            <h2 className="mb-3">Portfolio</h2>
            <img
              className="image-fluid w-100 mb-2 text-tra mt-4"
              src={portfolioData.imgCopertina}
              alt="cover progetto"
            />
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h3>
              <strong> {portfolioData.nomeProgetto}</strong>
            </h3>
            <p>
              {portfolioData.descrizione &&
              portfolioData.descrizione.includes(".")
                ? portfolioData.descrizione
                    .split(".")
                    .map((item) => <p>{!item.trim() ? item : item + "."}</p>)
                : portfolioData.descrizione}
            </p>

            {/* <span>
              Pubblicato:{" "}
              <strong>{new Date(portfolioData.data).getFullYear()}</strong>
            </span> */}
          </Col>

          <Container className="p-0 my-2">
            <Row>
              <Col>
                <Gallery
                  images={[
                    {
                      src: portfolioData.img1,
                      alt: "tavola 1",
                    },

                    { src: portfolioData.img2, alt: "tavola 2" },

                    { src: portfolioData.img3, alt: "tavola 3" },
                  ]}
                />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default ProgettoPortfolio;
