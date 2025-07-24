# Capstone Portfolio - Frontend

Questo progetto rappresenta il frontend del mio portfolio personale, sviluppato con React. È parte di un'applicazione full-stack, il cui backend è realizzato con Spring Boot.

Questo repository copre esclusivamente la parte frontend. Il backend è disponibile in un repository separato:
https://github.com/GabrieleAlleruzzo/backend-capstone

## Requisiti per l'esecuzione

Per far funzionare correttamente il sito, è necessario clonare e avviare sia il frontend che il backend.
Assicurati che il backend sia correttamente configurato come descritto qui sotto.

## Configurazione Backend

All'interno del progetto backend, devi creare un file env.properties nella cartella src. Questo file è necessario per fornire le variabili sensibili al progetto (password, chiavi API, ecc.).

## Esempio di env.properties:

Inserisci le tue credenziali e API key reali nei campi vuoti.

```env
postgresql.password=

# Cloudinary
cloud_name=
api_key=
api_secret=
```

## Avvio frontend

Creare un file di tipo .env con questa configurazione

```env
REACT_APP_API_URL=
REACT_APP_PORT=
```

## Postman - Collection API CRUD

Nel repository del backend è inclusa una collection Postman chiamata:
ProgettoCapstone.postman_API_collection

Questa collection ti permette di testare le API CRUD e ottenere il token di autenticazione, necessario per visualizzare correttamente le pagine Commissioni e ProgettoCommissione.

## Cosa fare con Postman:

Effettua una register (POST registerAdmin)

Compila la post per realizzare almeno un progettoPortfolio (POST postPortfolio)

## Tecnologie Utilizzate

Frontend: React, Bootstrap, BootstrapReact Axios

Backend: Spring Boot, PostgreSQL, Cloudinary, JavaMail

Autenticazione: JWT

Dev Tools: Postman, Git, Maven

## Autore

Progetto sviluppato da Gabriele Alleruzzo come parte del percorso di formazione Epicode.
