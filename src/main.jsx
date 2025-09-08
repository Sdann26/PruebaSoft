import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.scss';
import PlanesYCoberturas from './pages/PlanesYCoberturas.jsx';
import Resumen from './pages/Resumen.jsx';
import Layout from './Layout/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/planes-y-coberturas" element={<PlanesYCoberturas />} />
          <Route path="/resumen" element={<Resumen />} />
          <Route
            path="*"
            element={<Navigate to="/planes-y-coberturas" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
