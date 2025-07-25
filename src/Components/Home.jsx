import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { GetAllProgettiProtfolio } from "../API/api.js";
import { useState, useEffect, useLayoutEffect } from "react";

const Home = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [layout, setLayout] = useState(null);
  const [animationClass, setAnimationClass] = useState("initial-state");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass("final-state");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    setLayout(window.innerWidth);
    console.log(layout);
  }, []);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GetAllProgettiProtfolio();
        setPortfolioData(data);
        setLoading(false);
      } catch (err) {
        console.error("Errore nel recupero dei progetti:", err);
        setError("Impossibile caricare i progetti.");
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <Container
          id="hero"
          className="hero-h d-flex align-items-center justify-content-center container-fluid vh-100"
        >
          <Row className="d-flex align-content-center justify-content-center ms-xs-2">
            <Col xs={12} md={6}>
              <h1
                id="hero-t"
                className={`text-uppercase fw-bolder d-flex justify-content-md-end justify-content-xs-start  ${animationClass}`}
              >
                Gabriele
                <br />
                Alleruzzo
              </h1>
            </Col>
            <Col
              id="hero-txt"
              xs={12}
              md={6}
              className={`border-hero d-flex flex-column justify-content-center ${animationClass} d-none d-md-block`}
            >
              <h2>
                Gaphic designer <br /> & web designer
              </h2>
              <p>
                logo design <br />
                web design <br />
                S.M. Management
              </p>
            </Col>{" "}
            <Col
              id="hero-txt"
              xs={12}
              md={6}
              className={`border-hero d-flex flex-column justify-content-center ${animationClass} d-block d-md-none`}
            >
              <h2>Gaphic designer & web designer</h2>
              <p>logo design web design SM Menagement</p>
            </Col>{" "}
            <div
              id="hero-button-container"
              className={`d-flex justify-content-center mt-5  ${animationClass}`}
            >
              <button className="border-0 bg-transparent">
                {" "}
                <a href="#about">ABOUT</a>
              </button>
            </div>
          </Row>
        </Container>

        {/*about mme*/}
        <Container className="d-flex align-items-center py-5 home-s" id="about">
          <Row className=" d-flex align-items-center justify-content-center">
            <Col
              xs={12}
              md={6}
              className="d-none d-md-block p-lg-5 p-md-5  col-md-6 col-12"
            >
              <h2>About me</h2>
              <p className="">
                Dal 2020 progetto e sviluppo la comunicazione di piccole e medie
                imprese su canali social, digitali e stampati come freelance e
                collaboratore esterno per agenzie di digital marketing e web
                agencies.
              </p>
              <Link className="custom-btn2" to="/about">
                {" "}
                leggi di più
              </Link>
            </Col>
            <Col xs={12} md={6}>
              <img
                className="mb-2 w-100 "
                src="src/assets/images/meff-1.png"
                alt="meff pensante"
              />
            </Col>{" "}
            <Col xs={12} md={0} className="d-block d-md-none p-sm-0 p-0">
              <h2>About me</h2>
              <p className="">
                Dal 2020 progetto e sviluppo la comunicazione di piccole e medie
                imprese su canali social, digitali e stampati come freelance e
                collaboratore esterno per agenzie di digital marketing e agenzie
                web.
              </p>
              <Link className="custom-btn2" to="/about">
                {" "}
                leggi di più
              </Link>
            </Col>
          </Row>
        </Container>

        {/*portfolio*/}
        <Container className="d-flex align-items-center py-5 home-s ">
          <Row className=" d-flex align-items-center justify-content-center">
            <Col xs={12} md={6} className="p-0 m-0">
              {/*      */}
              <Carousel className="px-0 mb-2 " slide={false}>
                {portfolioData.map((progetto) => (
                  <Carousel.Item key={progetto.id}>
                    <Link to={"/progettoportfolio/" + progetto.id}>
                      <img
                        className=" img-fluid mx-auto w-100"
                        src={progetto.imgCopertina}
                        alt="cover progetti"
                      />
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>{" "}
            </Col>
            <Col xs={12} md={6} className="p-lg-5 p-md-5  col-md-6 col-12 p-0">
              <h2>Portfolio</h2>
              <p className="">
                Ho lavorato come graphic e web designer per uffici e attività
                commerciali, progettando dai classici menù da tavolo a loghi
                aziendali e siti web.
              </p>
              <Link className="custom-btn2" to="/portfolio">
                {" "}
                leggi di più
              </Link>
            </Col>
          </Row>
        </Container>

        {/*commissions*/}
        <Container className="d-flex align-items-center py-5 home-s">
          <Row className=" d-flex align-items-center justify-content-center">
            <Col
              xs={12}
              md={6}
              className="d-none d-md-block p-lg-5 p-md-5  col-md-6 col-12"
            >
              <h2>Commissions</h2>
              <p className="">
                Al momento accetto lavori su commissione. Se hai un idea per un
                progetto da propormi clicca sul link di seguito e compila il
                modulo.
              </p>
              <Link className="custom-btn2" to="commissiona">
                {" "}
                leggi di più
              </Link>
            </Col>
            <Col xs={12} md={6} className="p-0">
              <img
                className="mb-2 w-100"
                src="src/assets/images/home-01B.png"
                alt="simboli grafici"
              />
            </Col>
            <Col xs={12} md={0} className="d-block d-md-none p-0">
              <h2>Commissions</h2>
              <p className="">
                Al momento accetto lavori su commissione. Se hai un idea per un
                progetto da propormi clicca sul link di seguito e compila il
                modulo.
              </p>
              <Link className="custom-btn2" to="commissiona">
                {" "}
                leggi di più
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
