import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AdminProvider } from "./Components/AdminProvider.jsx";

const contextValue = {
  theme: "theme",
  userName: "gabriele",
  toggleTheme: "toggleTheme",
  setUserName: "setUserName",
};

createRoot(document.getElementById("root")).render(
  <AdminProvider>
    <App />
  </AdminProvider>
);
