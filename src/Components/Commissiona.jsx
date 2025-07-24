import Form from "react-bootstrap/Form";
import {
  Container,
  Col,
  Row,
  FloatingLabel,
  Button,
  Spinner,
} from "react-bootstrap";
import { PostNuovaCommissione } from "../API/api.js";
import { useState } from "react";

const Commissiona = () => {
  const getTodayDateStringFormatted = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [tipoProg, setTipoProg] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [budget, setBudget] = useState(100);
  const [data, setData] = useState(getTodayDateStringFormatted());

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const TIPO_PROGETTO_COMMISSIONE = {
    LOGO_DESIGN: "logo_design",
    WEB_DESIGN: "web_design",
    SOCIAL_MEDIA_CONTENT: "social_media_content",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "tipoProg":
        setTipoProg(value);
        break;
      case "descrizione":
        setDescrizione(value);
        break;
      case "budget":
        setBudget(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const commissionData = {
        name,
        surname,
        tel,
        email,
        tipoProg,
        descrizione,
        budget: parseInt(budget, 10),

        data: data,
      };

      await PostNuovaCommissione(commissionData);

      setSuccess(true);

      setName("");
      setSurname("");
      setTel("");
      setEmail("");
      setTipoProg("");
      setDescrizione("");
      setBudget(100);
    } catch (err) {
      console.error("Errore invio form commissione:", err);
      let errorMessage = "Errore durante l'invio della commissione. Riprova.";
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Container className="">
        <Row className="">
          <Col xs={12} className="">
            <h2 className="">Commission</h2>
            <p className="">
              Compila il modulo, riceverai un email di riscontro.
            </p>
          </Col>
        </Row>

        <form onSubmit={handleSubmit} className="">
          {/* Campo Nome */}
          <Form.Group controlId="formName">
            <Form.Control
              className="border-0 rounded-0 bg-transparent border-bottom my-4"
              type="text"
              placeholder="Inserisci il tuo nome"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Campo Cognome */}
          <Form.Group controlId="formSurname">
            <Form.Control
              className="border-0 rounded-0 bg-transparent border-bottom my-4"
              type="text"
              placeholder="Inserisci il tuo cognome"
              name="surname"
              value={surname}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Campo Telefono */}
          <Form.Group controlId="formTel">
            <Form.Control
              className="border-0 rounded-0 bg-transparent border-bottom my-4"
              type="tel"
              placeholder="Inserisci numero di telefono"
              name="tel"
              value={tel}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Campo Email */}
          <Form.Group controlId="formEmail">
            <Form.Control
              className="border-0 rounded-0 bg-transparent border-bottom my-4"
              type="email"
              placeholder="Inserisci la tua email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Campo Tipo Progetto */}
          <Form.Group controlId="formTipoProg">
            <FloatingLabel label="Seleziona il tipo di progetto">
              <Form.Select
                className="border-0 rounded-0 bg-transparent border-bottom my-4 pt-4"
                name="tipoProg"
                value={tipoProg}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                {Object.values(TIPO_PROGETTO_COMMISSIONE).map((type) => (
                  <option key={type} value={type}>
                    {type.replace(/_/g, " ").toUpperCase()}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          {/* Campo Descrizione */}
          <Form.Group controlId="formDescrizione">
            <FloatingLabel label="Descrivi il tuo progetto">
              <Form.Control
                id="txt-field"
                className="border-0 rounded-0 bg-transparent border-bottom my-4 pt-5"
                as="textarea"
                placeholder=""
                name="descrizione"
                value={descrizione}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Form.Group>

          {/* Campo bbudget */}
          <Form.Group controlId="formBudget">
            <FloatingLabel label="Budget stimato">
              <Form.Control
                className="border-0 rounded-0 bg-transparent border-bottom my-4 pt-4"
                type="number"
                placeholder="Inserisci il budget stimato"
                name="budget"
                value={budget}
                onChange={handleChange}
                required
                min="0"
              />
            </FloatingLabel>
          </Form.Group>

          {loading && (
            <div className="text-center mt-4">
              <Spinner
                animation="border"
                size="sm"
                role="status"
                className="text-blue-500 mr-2"
              />
              <p className="text-gray-700">Invio in corso...</p>
            </div>
          )}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-600 text-center mt-4">
              Grazie! Riceverai un riscontro via email per il tuo progetto.
            </p>
          )}

          <button type="submit" className="custom-btn" disabled={loading}>
            {loading ? "Invio..." : "Invia"}
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Commissiona;
