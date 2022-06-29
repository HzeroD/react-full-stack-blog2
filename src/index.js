import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './pages/App/App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  
);
