import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <header>
            <Header />
          </header>

          <Container className="flex-grow-1 px-2 mt-4">
            <main></main>
          </Container>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
