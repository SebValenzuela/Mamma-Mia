import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Routes

import DetailsView from './views/Details';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* Utiliza Routes para definir las rutas */}
        <Route path="/" element={<App />} />
        <Route path="/details/:pizzaId" element={<DetailsView />} /> {/* Define la ruta a Details.jsx */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
