import React from 'react';
import SGIC from '../img/SGIC.png'; // Importa la imagen del sello SGIC
import RSA from '../img/RSA_2023.png'; // Importa la imagen del sello RSA
import logoUned from '../img/UNED-Calatayud.png'; // Importa el logo de UNED Calatayud
import { Link } from 'react-router-dom';
import '../css/footerStyle.css';
import '../css/iconosAnimados.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="sedes">
          <div className="sede calatayud">
            <div>
              <h2>Calatayud</h2>
              <div>
                <ul className="iconosRedes social-icons" >
                  <li className="facebook"><Link to="http://facebook.com/UNEDCalatayud">Facebook</Link></li>
                  <li className="twitter"><Link to="http://twitter.com/UNEDCalatayud">Twitter</Link></li>
                  <li className="instagram"><Link to="http://instagram.com/UNEDCalatayud">Instagram</Link></li>
                  <li className="youtube"><Link to="http://www.youtube.com/user/unedcalatayud">Youtube</Link></li>
                </ul>
              </div>
              <ul>
                <li><p><i className="fa fa-map-marker sedeInfo"></i>&nbsp;&nbsp;Av. San Juan el Real, 1, 50300, Calatayud, Zaragoza</p></li>
                <li><p><i className="fa fa-phone sedeInfo"></i>&nbsp;&nbsp; <strong>Teléfono:</strong> 976 88 18 00</p></li>
                <li><p><i className="fa-brands fa-whatsapp sedeInfo"></i>&nbsp;&nbsp; <strong>WhatsApp:</strong> <Link to="#" target="_blank" >644 654 042</Link></p></li>
                <li><p><i className="fa-brands fa-telegram sedeInfo"></i>&nbsp;&nbsp; <strong>Telegram:</strong> <Link to="https://t.me/UNEDCalatayud" target="_blank" >Canal oficial</Link></p></li>
                <li><p><i className="fa fa-hand-point-right sedeInfo"></i>&nbsp;&nbsp; <Link to="https://forms.gle/caPKjsgFsiBg9Lar7" target="_blank" >Inscripción WhatsApp/Telegram</Link></p></li>
                <li><p><i className="fa fa-envelope sedeInfo"></i>&nbsp;&nbsp; <strong>Email:</strong> <Link to="mailto:info@calatayud.uned.es">info@calatayud.uned.es</Link></p></li>
              </ul>
            </div>
          </div>


          <div className="sede caspe">
            <div>
              <h2>Caspe</h2>
              <div>
                <ul className="iconosRedes social-icons">
                  <li className="facebook"><Link to="http://facebook.com/UNEDCaspe">Facebook</Link></li>
                </ul>
              </div>
              <ul>
                <li><p><i className="fa fa-map-marker"></i>&nbsp;&nbsp; C/ Francisco Guma, 35, 50700, Caspe, Zaragoza</p></li>
                <li><p><i className="fa fa-phone"></i>&nbsp;&nbsp; <strong>Teléfono:</strong> 976 63 15 93</p></li>
                <li><p><i className="fa fa-envelope"></i>&nbsp;&nbsp; <strong>Email:</strong> <Link to="mailto:info@caspe.uned.es">info@caspe.uned.es</Link></p></li>
              </ul>
            </div>
          </div> 

          <div className="sede ejea">
            <div>
              <h2>Ejea de los Caballeros</h2>
              <div>
                <ul className="iconosRedes social-icons">
                  <li className="facebook"><Link to="http://facebook.com/UNEDEjea" target="_blank" data-placement="bottom" data-tooltip title="Facebook">Facebook</Link></li>
                </ul>
              </div>
              <ul>
                <li><p><i className="fa fa-map-marker"></i>&nbsp;&nbsp; Centro Cívico Cultural, Paseo del Muro, 22-24, planta 3, 50600, Ejea de los Caballeros, Zaragoza</p></li>
                <li><p><i className="fa fa-phone"></i>&nbsp;&nbsp; <strong>Teléfono:</strong> 976 67 70 90</p></li>
                <li><p><i className="fa fa-envelope"></i>&nbsp;&nbsp; <strong>Email:</strong> <Link to="mailto:info@ejea.uned.es">info@ejea.uned.es</Link></p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Información de derechos de autor y logotipos*/}
      <div className="legal">
        <div className="logos">
          <div className="logoUned elementoLegal">
            <img  title="UNED Calatayud" src={logoUned} />
          </div>
          <div className="sellos elementoLegal">
            <img title="Sello RSA+ 2023" alt="Sello RSA+ 2023" src={RSA}/>
            <img title="Sello de certificación del SGICG-CA" alt="Sello de certificación del SGICG-CA" src={SGIC}/>
          </div>
          
          <div className="listaLegal elementoLegal">
              <ul>
                <li><Link to="/web/transparencia/rgpd/aviso-legal.asp">Aviso legal</Link></li>
                <li><Link to="/web/transparencia/rgpd/privacidad.asp">Política de privacidad</Link></li>
                <li><Link to="/web/transparencia/rgpd/cookies.asp">Política de cookies</Link></li>
                <li><Link to="https://www.unedcalatayud.es/contacto/">Contacto</Link></li>
              </ul>
          </div>
        </div>
        <div className="copyright">
          <p><small>UNED Calatayud &copy; Copyright 2020. Todos los derechos reservados.</small></p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
