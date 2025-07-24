import React, { createContext, useState, useEffect } from "react";

export const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    try {
      const storedToken = localStorage.getItem("adminToken");
      console.log(
        "AdminProvider: Token recuperato da localStorage all'avvio:",
        storedToken
      );
      return storedToken;
    } catch (e) {
      console.error(
        "AdminProvider: Errore nel recupero del token da localStorage:",
        e
      );
      return null;
    }
  });

  useEffect(() => {
    try {
      if (admin) {
        localStorage.setItem("adminToken", admin);
        console.log("AdminProvider: Token salvato in localStorage:", admin);
      } else {
        localStorage.removeItem("adminToken");
        console.log("AdminProvider: Token rimosso da localStorage.");
      }
    } catch (e) {
      console.error(
        "AdminProvider: Errore nel salvataggio/rimozione del token da localStorage:",
        e
      );
    }
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
