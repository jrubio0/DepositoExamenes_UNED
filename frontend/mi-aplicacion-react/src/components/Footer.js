import React from 'react';
import SGIC from '../img/SGIC.png'; // Importa la imagen del sello SGIC
import RSA from '../img/RSA_2023.png'; // Importa la imagen del sello RSA
import logoUned from '../img/UNED-Calatayud.png'; // Importa el logo de UNED Calatayud

const Footer = () => {
  return (
    <footer id="footer" className="hidden-print">
      <div className="container">
        <div className="row">
          {/* Sección de Calatayud */}
          <div className="col-md-4">
            <div className="contact-details">
              <h4 className="heading-primary">Calatayud</h4>
              {/* Iconos sociales */}
              <div className="social-icons">
                <ul className="social-icons">
                  <li className="facebook"><a href="http://facebook.com/UNEDCalatayud" target="_blank" data-placement="bottom" data-tooltip title="Facebook">Facebook</a></li>
                  <li className="twitter"><a href="http://twitter.com/UNEDCalatayud" target="_blank" data-placement="bottom" data-tooltip title="Twitter">Twitter</a></li>
                  <li className="instagram"><a href="http://instagram.com/UNEDCalatayud" target="_blank" data-placement="bottom" data-tooltip title="Instagram">Instagram</a></li>
                  <li className="youtube"><a href="http://www.youtube.com/user/unedcalatayud" target="_blank" data-placement="bottom" data-tooltip title="Youtube">Youtube</a></li>
                </ul>
              </div>
              {/* Detalles de contacto */}
              <ul className="contact mt-xlg">
                <li><p><i className="fa fa-map-marker"></i> Av. San Juan el Real, 1, 50300, Calatayud, Zaragoza</p></li>
                <li><p><i className="fa fa-phone"></i> <strong>Teléfono:</strong> 976 88 18 00</p></li>
                <li><p><i className="fa fa-whatsapp"></i> <strong>WhatsApp:</strong> <a href="#" target="_blank" >644 654 042</a></p></li>
                <li><p><i className="fa fa-mobile-phone"></i> <strong>Telegram:</strong> <a href="https://t.me/UNEDCalatayud" target="_blank" >Canal oficial</a></p></li>
                <li><p><i className="fa fa-hand-o-right"></i> <a href="https://forms.gle/caPKjsgFsiBg9Lar7" target="_blank" >Inscripción WhatsApp/Telegram</a></p></li>
                <li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:info@calatayud.uned.es">info@calatayud.uned.es</a></p></li>
              </ul>
            </div>
          </div>

          {/* Sección de Caspe */}
          <div className="col-md-4">
            <div className="contact-details">
              <h4 className="heading-primary">Caspe</h4>
              {/* Iconos sociales */}
              <div className="social-icons">
                <ul className="social-icons">
                  <li className="facebook"><a href="http://facebook.com/UNEDCaspe" target="_blank" data-placement="bottom" data-tooltip title="Facebook">Facebook</a></li>
                </ul>
              </div>
              {/* Detalles de contacto */}
              <ul className="contact mt-xlg">
                <li><p><i className="fa fa-map-marker"></i> C/ Francisco Guma, 35, 50700, Caspe, Zaragoza</p></li>
                <li><p><i className="fa fa-phone"></i> <strong>Teléfono:</strong> 976 63 15 93</p></li>
                <li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:info@caspe.uned.es">info@caspe.uned.es</a></p></li>
              </ul>
            </div>
          </div>

          {/* Sección de Ejea de los Caballeros */}
          <div className="col-md-4">
            <div className="contact-details">
              <h4 className="heading-primary">Ejea de los Caballeros</h4>
              {/* Iconos sociales */}
              <div className="social-icons">
                <ul className="social-icons">
                  <li className="facebook"><a href="http://facebook.com/UNEDEjea" target="_blank" data-placement="bottom" data-tooltip title="Facebook">Facebook</a></li>
                </ul>
              </div>
              {/* Detalles de contacto */}
              <ul className="contact mt-xlg">
                <li><p><i className="fa fa-map-marker"></i> Centro Cívico Cultural, Paseo del Muro, 22-24, planta 3, 50600, Ejea de los Caballeros, Zaragoza</p></li>
                <li><p><i className="fa fa-phone"></i> <strong>Teléfono:</strong> 976 67 70 90</p></li>
                <li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:info@ejea.uned.es">info@ejea.uned.es</a></p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Información de derechos de autor y logotipos */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            {/* Logotipo de UNED Calatayud */}
            <div className="col-md-4">
              <img title="UNED Calatayud" src={logoUned} />
            </div>
            {/* Sellos RSA+ 2023 y SGICG-CA */}
            <div className="col-md-4 hidden-print">
              <img title="Sello RSA+ 2023" alt="Sello RSA+ 2023" src={RSA} className="mr-lg" />
              <img title="Sello de certificación del SGICG-CA" alt="Sello de certificación del SGICG-CA" src={SGIC} />
            </div>
            {/* Enlaces legales y de contacto */}
            <div className="col-md-4 hidden-print">
              <ul className="list list-icons">
                <li><a href="/web/transparencia/rgpd/aviso-legal.asp">Aviso legal</a></li>
                <li><a href="/web/transparencia/rgpd/privacidad.asp">Política de privacidad</a></li>
                <li><a href="/web/transparencia/rgpd/cookies.asp">Política de cookies</a></li>
                <li><a href="https://www.unedcalatayud.es/contacto/">Contacto</a></li>
              </ul>
            </div>
          </div>
          {/* Texto de derechos de autor */}
          <div className="row">
            <div className="col-md-12">
              <p>UNED Calatayud &copy; Copyright 2020. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
