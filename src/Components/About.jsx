import { Container, Row, Col } from "react-bootstrap";
import meff from "../assets/images/meff-2.png";
import meff3 from "../assets/images/meff-3.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-start justify-content-between">
          <Col sx={12} lg={6} className="p-md-4">
            <h2>About</h2>
            <h1 className="fw-bolder">GABRIELE ALLERUZZO</h1>

            <strong>logo designer/ web designer/ S.M. Menager</strong>

            {/*img visibile solo su mobile */}
            <img
              id="meff3"
              src={meff3}
              alt="CV pic"
              className="d-block d-lg-none w-100  my-4"
            />
            <p>
              Gabriele Alleruzzo (Messina, 1996) è un graphic designer, web
              designer e SMM (Social Media Menager). Dal 2020 si occupa di
              identità visiva per piccole e medie imprese sul territorio
              siciliano.
              <br />
              <br />
              Il primo progetto grafico d'identità visiva è stato il{" "}
              <Link
                className="text-decoration-underline"
                to="/progettoportfolio/155"
              >
                Birrificio Artigianale Zankle
              </Link>
              per cui ha progettato etichette, illustrazioni animate e strategie
              di comunicazione su canali social. Successivamente ha lavorato per
              agenzie di comunicazione come Mind, Connessioni Digital Hub e
              TrovaWeb, progettando grafiche e interfaccie per siti web, landing
              page ed ecommerce.
              <br /> <br />
              Oggi lavora come freelance su commissione, mostrando forte
              interesse ed entusiasmo per i progetti dei suoi clienti. Se hai un
              idea per un progetto da proporre clicca sul link di seguito e
              compila il modulo.
              <br />
            </p>
            <Link to="/commissiona">
              <button className="custom-btn">COMMISSIONS</button>
            </Link>
          </Col>
          <Col sx={12} lg={6}>
            <img
              id="meff"
              src={meff}
              alt="CV pic"
              className=" d-none d-lg-block w-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
