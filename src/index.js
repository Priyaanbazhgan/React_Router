import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Inexpense from './routes/inexpense';
const root = ReactDOM.createRoot(
  document.getElementById('root')); 
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path=":invoiceId" element={<Invoices />} />        
        <Route path="inexpense" element={<Inexpense />} />
      </Route>    
    </Routes>
  </BrowserRouter>
);