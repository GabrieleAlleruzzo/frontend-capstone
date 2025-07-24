import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import ProgettoPortfolio from "./Components/ProgettoPortfolio";
import Commissiona from "./Components/Commissiona";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login";
import Commissioni from "./Components/Commissioni";
import ProgettoCommissione from "./Components/ProgettoCommissione";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <div className="d-flex flex-column min-vh-100 align-item-center p-0">
          <header className="sticky-top blur d-flex justify-content-center container-fluid p-0">
            <Header />
          </header>

          <div className="flex-grow-1 px-2 mt-4 mx-0 container-fluid">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/progettoportfolio/:id"
                  element={<ProgettoPortfolio />}
                />
                <Route path="/commissiona" element={<Commissiona />} />
                <Route path="/commissioni" element={<Commissioni />} />
                <Route
                  path="/progettocommissione/:id"
                  element={<ProgettoCommissione />}
                />
              </Routes>
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
