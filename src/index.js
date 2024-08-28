import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'


// screens
import Join from './screen/Join'
import Admin from './screen/Admin';
import Panel from './screen/Panel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path='/' />
        <Route element={<Join />} path='/join' />
        <Route element={<Admin />} path='/admin' />
        <Route element={<Panel />} path='/admin/panel' />
        </Routes>
    </Router>
  </React.StrictMode>
);
