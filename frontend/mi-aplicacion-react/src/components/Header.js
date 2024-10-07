import React from 'react';
import '../css/headerStyle.css';
import logo from '../img/logo-uned-calatayud.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="header top">
      <div class="whiteHeader">
        <img src={logo} class="logo"/>
        <p>EXÁMENES</p>
      </div>
      <div class="greenHeader">
          <p class="breadcrumbs">UNED Calatayud / Depósito de exámenes</p>
          <p class="title">Selección de carrera</p>
      </div>
    </div>
  );
};

export default Header;
