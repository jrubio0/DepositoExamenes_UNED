import React from 'react';
import imgDeposito from '../img/depositoExamenes-Acceso.jpg'; // Importa la imagen del depósito de exámenes

const Body = () => {
  return (
    <div className="body">
      {/* Encabezado de la página */}
      <section className="page-header page-header-color page-header-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Migas de pan (breadcrumbs) */}
              <ul className="breadcrumb">
                <li><a href="/">UNED Calatayud</a></li>
                <li className="active">Exámenes</li> {/* Página actual: Exámenes */}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1>Depósito de Exámenes</h1> {/* Título de la sección: Depósito de Exámenes */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contenido principal */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Acceso al <strong>Depósito de Exámenes</strong></h1> {/* Título destacado */}
            <p>
              <a href="http://j2ee.uned.es/ssouned/logout.jsp?URL=http://www.calatayud.uned.es/Examenes/examenes_step_1.asp">
                {/* Imagen con enlace al depósito de exámenes */}
                <span className="thumb-info thumb-info-no-zoom">
                  <span className="thumb-info-wrapper">
                    <img src={imgDeposito} className="img-responsive" alt="Depósito de Exámenes UNED Calatayud" />
                    {/* Icono de enlace */}
                    <span className="thumb-info-action">
                      <span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
                    </span>
                  </span>
                </span>
              </a>
            </p>
            {/* Textos informativos */}
            <p>Conforme al acuerdo del Consejo de Gobierno de la UNED de 22 de diciembre de 2010, <strong>únicamente se permite acceso al Depósito de Exámenes a usuarios del Campus UNED.</strong></p>
            <p>Conforme al acuerdo del Consejo de Gobierno de la UNED de 30 de junio de 2015, <strong>se advierte que los equipos docentes no quedan vinculados a los contenidos y respuestas de los exámenes de convocatorias anteriores.</strong></p>
            {/* Solución de problemas de acceso */}
            <div className="row mb-xl">
              <div className="col-md-12">
                <h2 className="mt-lg">Solución de problemas de acceso</h2>
                <p>Si tiene problemas para acceder, entre al Depósito de Exámenes a través del modo <strong>Incógnito/Privado</strong> de su navegador habitual.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
