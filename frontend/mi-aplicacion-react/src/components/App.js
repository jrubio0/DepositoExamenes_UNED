import React from 'react';
import Header from './Header';
import Carreras from "./Carreras";
import Footer from "./Footer";
import Asignaturas from './Asignaturas';
import StickyScroller from './StickyScroller';
import ScrollToTop from './ScrollToTop';
import Examenes from './Examenes';
import "../css/app.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  const getHeaderBreadcrumbs = () => {
    //Para que funcione esto he tenido que mover el <Router> al index.js y aqui dejar simplemente un <div>
    switch (location.pathname) {
      case '/':
        return 'Selección de carrera';
      case '/asignaturas':
        return 'Selección de carrera';
      case '/examenes':
        return 'Asignaturas seleccionadas';
      default:
        return 'Selección de carrera';
    }
  };

  return (
    <div>
      <ScrollToTop />
      <Header breadcrumbs={getHeaderBreadcrumbs()}/>



      <Routes>
        <Route path="/" element={<Carreras />} />
        <Route path="/asignaturas/:idCarrera" element={<Asignaturas />} />
        <Route path="/examenes" element={<Examenes />} />
      </Routes>

      <Footer />
      <StickyScroller />
    </div>
  );
}

export default App;
