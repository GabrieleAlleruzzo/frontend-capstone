import { Container } from "react-bootstrap";
import logo from "../assets/images/monogramma.svg";

const Footer = () => {
  return (
    <div id="footer" className="mt-5">
      <Container
        fluid
        className="d-flex flex-column py-4 justify-content-center"
      >
        {/* */}
        <img className="logo" src={logo} alt="logo monogramma" />

        <Container id="socials" className="py-4">
          <ul className="py-2 d-flex flex-row justify-content-between m-0 p-0">
            <li>
              <a href="https://www.linkedin.com/in/gabriele-alleruzzo-a42261287/">
                {" "}
                <i className="bi bi-linkedin me-1"></i>
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gabriele.aller_gd/">
                {" "}
                <i className="bi bi-instagram me-1"></i>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/GabrieleAlleruzzo">
                <i className="bi bi-github me-1"></i>GitHub
              </a>
            </li>
          </ul>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
