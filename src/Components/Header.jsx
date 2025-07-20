import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import logo from "../assets/images/monogramma.svg";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="d-flex justify-content-between align-items-center py-2">
        <Button
          id="header-btn"
          className=""
          variant="alert"
          onClick={handleShow}
        >
          <i className="bi bi-list"></i>
        </Button>
        <img className="logo" src={logo} alt="logo monogramma" />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Visit</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="py-2 d-flex flex-column justify-content-between m-0 p-0">
              <li className="my-1">
                <Link to="/">Home</Link>
              </li>
              <li className="my-1">
                <Link to="/about">About</Link>
              </li>
              <li className="my-1">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="my-1">
                <Link to="/commissiona">Commissiona</Link>
              </li>
              <li className="my-1">
                <a href="https://www.linkedin.com/in/gabriele-alleruzzo-a42261287/">
                  Linkedin
                </a>
              </li>
              <li className="my-1">
                <a href="https://www.linhttps://www.instagram.com/gabriele.aller_gd/">
                  Instagram
                </a>
              </li>
              <li className="my-1">
                <a href="https://github.com/GabrieleAlleruzzo">GitHub</a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
};

export default Header;
