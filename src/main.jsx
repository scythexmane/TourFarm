import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import './i18n';
import '@fortawesome/fontawesome-free/css/all.min.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
)