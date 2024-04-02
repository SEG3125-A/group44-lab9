import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import "./styles.css";
import App from "./App";
import "./i18n.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Make sure i18next is done fetching the string prior to the app loading */}
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);