import React from 'react';
import '../css/headerStyle.css';
import logo from '../img/logo-uned-calatayud.png';
import { Link } from 'react-router-dom';

const Header = ({ breadcrumbs }) => {
  return (
    <div className="header top">
      <div className="whiteHeader">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo UNED Calatayud" />
          </Link>
        </div>

        <p>EXÁMENES</p>
      </div>
      <div className="greenHeader">
        <p className="breadcrumbs">UNED Calatayud / Depósito de exámenes</p>
        <p className="title">{breadcrumbs}</p>
      </div>
    </div>
  );
};

export default Header;
