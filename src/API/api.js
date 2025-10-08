import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;
// const apiPort = import.meta.env.VITE_APP_PORT;

const apiClient = axios.create({
  //  baseURL: `${apiUrl}:${apiPort}/`, locale
  // baseURL: apiUrl.endsWith("/") ? apiUrl : `${apiUrl}/`,
  baseURL: apiUrl,
  timeout: 10000000,
  headers: {
    "Content-Type": "application/json",
  },
});

const postLogin = async (obj) => {
  const response = await apiClient.post("auth/login", obj);
  if (response.error) {
    return response.error;
  } else {
    return response.data;
  }
};

const setAuth = (token) => {
  if (!apiClient.defaults.headers.common) {
    apiClient.defaults.headers.common = {};
  }
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log(
    "Header Authorization settato:",
    apiClient.defaults.headers.common["Authorization"]
  );
};

/*  Commissioni */

const GetAllProgettiCommissioni = async (token) => {
  try {
    if (token) {
      setAuth(token);
    } else {
      throw new Error(
        "Token di autenticazione mancante per la richiesta delle commissioni."
      );
    }

    const response = await apiClient.get("commissioni/");
    console.log("Progetti pagina commissioni", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Errore nel recupero delle commissioni (API):",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const GetProgettoCommissioniId = async (id, token) => {
  if (token) {
    setAuth(token);
  } else {
    throw new Error(
      "Token di autenticazione mancante per la richiesta delle commissioni."
    );
  }

  try {
    console.log(id);
    const response = await apiClient.get("commissioni/" + id);

    console.log("Progetto singolo:", response.data);
    return response.data;
  } catch (error) {
    console.error("Errore recupero progetto", error);
    throw error;
  }
};

const PostNuovaCommissione = async (commissionData) => {
  console.log("Dati commissione da inviare:", commissionData);
  try {
    const Response = await apiClient.post(
      "/commissioni/addCommissione",
      commissionData
    );
    console.log("Commissione effettuata con successo:", Response.data);
    return Response.data;
  } catch (error) {
    console.error("Errore nell'invio della richiesta:", error);
    throw error;
  }
};

const DeleteCommissioni = async (id, token) => {
  if (token) {
    setAuth(token);
  } else {
    throw new Error(
      "Token di autenticazione mancante per la richiesta delle commissioni."
    );
  }
  try {
    const response = await apiClient.delete("commissioni/delete/" + id);
    console.log("Eliminizione commissione effettuata ", response.data);
    return response.data;
  } catch (error) {
    console.error("Non è stato possibbile eliminare il progetto ", error);
    throw error;
  }
};

/*  Portfolio */

const GetAllProgettiProtfolio = async () => {
  try {
    const response = await apiClient.get("portfolio/all");
    console.log("Progetti pagina protfolio", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Errore nel recupero progetti",
      error.response || error.message
    );
    throw error;
  }
};

const GetProgettoProtfolioId = async (id) => {
  try {
    console.log(id);
    const response = await apiClient.get("portfolio/ID/" + id);

    console.log("Progetto singolo:", response.data);

    return response.data;
  } catch (error) {
    console.error("Errore recupero progetto", error);
    throw error;
  }
};

const PostProgettoPortfolio = async (progettoData, token) => {
  setAuth(token);
  console.log("Token utilizzato per PostProgettoPortfolio:", token);

  try {
    const Response = await apiClient.post(
      "portfolio/upload-with-data",
      progettoData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Progetto portfolio creato con successo:", Response.data);
    return Response.data;
  } catch (error) {
    console.error(
      "Errore nell'invio della richiesta PostProgettoPortfolio:",
      error.response ? error.response.data : error.message
    );

    throw error;
  }
};

const PutProgettoPortfolio = () => {
  apiClient
    .put("portfolio/put")
    .then((Response) => {
      console.log("Modifica effettuata", Response.data);
      return Response.data;
    })
    .catch((error) => {
      console.log("Errore nell'invio della modifica", error);
      throw error;
    });
};

const DeleteProgettoPortfolio = (id) => {
  apiClient
    .delete("portfolio/delete/" + id)
    .then((Response) => {
      console.log("Progetto eliminato", Response.data);
      return Response.data;
    })
    .catch((error) => {
      console.log("Errore nella rimozione del progetto", error);
      throw error;
    });
};

export {
  GetAllProgettiProtfolio,
  GetProgettoProtfolioId,
  PostProgettoPortfolio,
  PutProgettoPortfolio,
  DeleteProgettoPortfolio,
  postLogin,
  setAuth,
  GetAllProgettiCommissioni,
  GetProgettoCommissioniId,
  PostNuovaCommissione,
  DeleteCommissioni,
};
