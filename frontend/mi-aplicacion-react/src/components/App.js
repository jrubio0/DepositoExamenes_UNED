import React from 'react';
import Header from './Header';
import Carreras from "./Carreras";
import Footer from "./Footer";
import Asignaturas from './Asignaturas';
import StickyScroller from './StickyScroller';
import "../css/app.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Header />



      <Routes>
        <Route path="/" element={<Carreras />} />
        <Route path="/asignaturas/:idCarrera" element={<Asignaturas />} />
      </Routes>

      <Footer />
      <StickyScroller />
    </Router>
  );
}

export default App;
