import { useState, useEffect, useContext, Fragment } from "react";
import { Form, Col, Spinner } from "react-bootstrap";
import { postLogin } from "/src/API/api";
import { AdminContext } from "./AdminProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usaNavigatE = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errore, setErrore] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState(null);
  const HandleOnChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const [pswd, setPswd] = useState(null);
  const HandleOnChangePswd = (e) => {
    const value = e.target.value;
    setPswd(value);
  };

  /* */

  const [error, setError] = useState({
    name: false,
    pswd: false,
  });

  useEffect(() => {
    if (name) {
      if (name.length >= 10) {
        setError({
          ...error,
          name: false,
        });
      } else {
        setError({ ...error, name: true });
      }
    }
    if (pswd) {
      if (pswd.length >= 10) {
        setError({
          ...error,
          pswd: false,
        });
      } else {
        setError({ ...error, pswd: true });
      }
    }
  }, [name, pswd]);

  const { admin, setAdmin } = useContext(AdminContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrore(null);
    setSuccess(false);

    try {
      let sendObj = {};
      if (name && pswd) {
        sendObj.name = name;
        sendObj.pswd = pswd;
        const token = await postLogin(sendObj);
        console.log(token);
        setAdmin(token);
        setLoading(false);
        setSuccess(true);
        usaNavigatE("/commissioni");
      } else {
        setError("Devi riempire i moduli");
      }
    } catch (error) {
      setErrore(error);
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      <div className="container">
        <Col>
          <h2>Login</h2>
          <p>Solo l'admin può entrare.</p>
          <form
            method="POST"
            action=""
            className="my-5"
            onSubmit={handleSubmit}
          >
            <Form.Group className="my-4 ">
              <Form.Control
                className="my-4 border-0 rounded-0 bg-transparent border-bottom "
                type="text"
                placeholder="Inserisci username"
                name="name"
                onChange={HandleOnChange}
              />
              <Form.Control
                className="my-4 border-0 rounded-0 bg-transparent border-bottom "
                type="password"
                placeholder="Inserisci password"
                name="password"
                onChange={HandleOnChangePswd}
              />
            </Form.Group>
            <button type="submit" className="custom-btn my-4">
              invia
            </button>
            {loading ? (
              <div>
                <Spinner animation="border" variant="dark" />
                <p>Caricamento...</p>
              </div>
            ) : (
              <></>
            )}
          </form>
        </Col>
      </div>
    </>
  );
};

export default Login;
