import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import logo from "../assets/images/MonogrammaColore.svg";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="d-flex justify-content-between align-items-center m-0 p-0 py-0">
        <Button
          id="header-btn"
          className=""
          variant="alert"
          onClick={handleShow}
        >
          <i className="bi bi-list"></i>
        </Button>
        <Link to="/" onClick={handleClose}>
          <img className="logo" src={logo} alt="logo monogramma" />
        </Link>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="py-2 d-flex flex-column align-items-center mt-5">
              <li className="my-2 fs-4 fw-normal">
                <Link to="/" onClick={handleClose}>
                  HOME
                </Link>
              </li>
              <li className="my-2 fs-4 fw-normal">
                <Link to="/about" className="" onClick={handleClose}>
                  ABOUT
                </Link>
              </li>
              <li className="my-2 fs-4 fw-normal">
                <Link to="/portfolio" className="" onClick={handleClose}>
                  PORTFOLIO
                </Link>
              </li>
              <li className="my-2 fs-4 fw-normal">
                <Link
                  to="/commissiona"
                  className="text-capitalize"
                  onClick={handleClose}
                >
                  COMMISSION
                </Link>
              </li>
              {/* <li className="my-2 fs-4 fw-normal">
                <Link
                  to="/login"
                  className="text-capitalize"
                  onClick={handleClose}
                >
                  COMMISSIONI
                </Link>
              </li>*/}
              <li className="my-2 fs-4 fw-normal">
                <Link
                  to="/login"
                  className="text-capitalize"
                  onClick={handleClose}
                >
                  LOGIN
                </Link>
              </li>
              <li className="my-1 mt-3 fw-light">
                <a
                  href="https://www.linkedin.com/in/gabriele-alleruzzo-a42261287/"
                  onClick={handleClose}
                >
                  Linkedin
                </a>
              </li>
              <li className="my-1 fw-light">
                <a
                  href="https://www.instagram.com/gabriele.aller_gd/"
                  onClick={handleClose}
                >
                  Instagram
                </a>
              </li>
              <li className="my-1 fw-light">
                <a
                  href="https://github.com/GabrieleAlleruzzo"
                  onClick={handleClose}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
};

export default Header;
