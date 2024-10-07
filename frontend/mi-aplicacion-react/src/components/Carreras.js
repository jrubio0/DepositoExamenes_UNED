import '../css/carrerasStyle.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UseState } from 'react';


// <i class="fa fa-chevron-up"></i>

function TablaCursosDeAcceso() {
  return (
    <table>
      <tr>
        <td><Link className="nombreCurso" to="/prueba">Curso de acceso para <strong>mayores de 25 a&ntilde;os</strong></Link></td>
        <td><Link className="nombreCurso" href="">Curso de acceso para <strong>mayores de 45 a&ntilde;os</strong></Link></td>
      </tr>
    </table>
  );
}

function TablaGrados() {
  return (
    <table>
      <tr>
        <td><Link className="nombreCurso" href="">Administración y Dirección de Empresas</Link>,&nbsp;<small>&nbsp;6502</small></td>
        <td><Link className="nombreCurso" href="">Antropología Social y Cultural</Link>,&nbsp;<small>&nbsp;7002</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Ciencias Jurídicas de las Administraciones Públicas</Link>,&nbsp;<small>&nbsp;6601</small></td>
        <td><Link className="nombreCurso" href="">Ciencia política y de la Administración</Link>,&nbsp;<small>&nbsp;6901</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Ciencias Ambientales</Link>,&nbsp;<small>&nbsp;6101</small></td>
        <td><Link className="nombreCurso" href="">Criminología</Link>,&nbsp;<small>&nbsp;6604</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Derecho</Link>,&nbsp;<small>&nbsp;6602</small></td>
        <td><Link className="nombreCurso" href="">Economía</Link>,&nbsp;<small>&nbsp;6501</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Educación infantil</Link>,&nbsp;<small>&nbsp;6303</small></td>
        <td><Link className="nombreCurso" href="">Educación Social</Link>,&nbsp;<small>&nbsp;6301</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Estudios Ingleses</Link>,&nbsp;<small>&nbsp;6402</small></td>
        <td><Link className="nombreCurso" href="">Filosofía</Link>,&nbsp;<small>&nbsp;7001</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Física</Link>,&nbsp;<small>&nbsp;6104</small></td>
        <td><Link className="nombreCurso" href="">Geografía e Historia</Link>,&nbsp;<small>&nbsp;6701</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Historia del Arte</Link>,&nbsp;<small>&nbsp;6702</small></td>
        <td><Link className="nombreCurso" href="">Ingeniería Electrónica Industrial y automática</Link>,&nbsp;<small>&nbsp;6802</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Ingeniería Eléctrica</Link>,&nbsp;<small>&nbsp;6801</small></td>
        <td><Link className="nombreCurso" href="">Ingeniería Energía</Link>,&nbsp;<small>&nbsp;6805</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Ingeniería Tecnología Industrial</Link>,&nbsp;<small>&nbsp;6804</small></td>
        <td><Link className="nombreCurso" href="">Ingeniería Tecnologías Información</Link>,&nbsp;<small>&nbsp;7102</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Ingeniería Informática</Link>,&nbsp;<small>&nbsp;7101</small></td>
        <td><Link className="nombreCurso" href="">Ingeniería Mecánica</Link>,&nbsp;<small>&nbsp;6803</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Lengua y Literatura Españolas</Link>,&nbsp;<small>&nbsp;6401</small></td>
        <td><Link className="nombreCurso" href="">Matemáticas</Link>,&nbsp;<small>&nbsp;6102</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Pedagogía</Link>,&nbsp;<small>&nbsp;6302</small></td>
        <td><Link className="nombreCurso" href="">Psicología</Link>,&nbsp;<small>&nbsp;6201</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Química</Link>,&nbsp;<small>&nbsp;6103</small></td>
        <td><Link className="nombreCurso" href="">Sociología</Link>,&nbsp;<small>&nbsp;6902</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" href="">Trabajo Social</Link>,&nbsp;<small>&nbsp;6603</small></td>
        <td><Link className="nombreCurso" href="">Turismo</Link>,&nbsp;<small>&nbsp;6503</small></td>
      </tr>
    </table>
  );
}

function TablaMasteres() {
  const [facultades, setFacultades] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/facultades') //Modificar en entorno de produccion
      .then(response => {
        setFacultades(response.data);
      })
  }, []);



  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (!facultades) {
    return (<div>Cargando...</div>);
  }



  //Al haber deshabilitado el modo estricto en react cada componente se renderiza solo dos veces.
  //La primera vez que se renderiza este componente aun no ha consultado la base de datos pero debe de renderizarlo de alguna manera
  //La segunda vez que se renderiza no pasa por el if e imprime correctamente todas las facultades

  let arrayFacultades = Object.entries(facultades); //Transformo en array para poder usar .map()


  return (
    <div className="facultades">
      {arrayFacultades.map((item, index) => (
        <div className="facultadYMasteres">
          <div className="facultad" onClick={() => toggleAccordion(index)}>
            <i className="iconoFacultad fa fa-university"></i>
            <p>{item[1].nombreFacultad}</p>
          </div>
          <div
            className={`masteres ${activeIndex === index ? 'expanded' : ''}`}
          >
            {item[1].listadoMasteres.map((master, masterIndex) => (
              <p className="master nombreCurso" key={masterIndex}>{master.nombreCortoCarrera},&nbsp;<small>{master.idCarrera}</small></p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TablaIdiomas() {
  return (
    <table>
      <tr>
        <td><Link className="nombreCurso">Alem&aacute;n (CUID)</Link>,&nbsp;<small>&nbsp;0476</small></td>
        <td><Link className="nombreCurso">&Aacute;rabe (CUID)</Link>,&nbsp;<small>&nbsp;0477</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso">Catal&aacute;n (CUID)</Link>,&nbsp;<small>&nbsp;0492</small></td>
        <td><Link className="nombreCurso">Chino (CUID)</Link>,&nbsp;<small>&nbsp;0480</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso">Espa&ntilde;ol (CUID)</Link>,&nbsp;<small>&nbsp;0491</small></td>
        <td><Link className="nombreCurso">Euskera (CUID)</Link>,&nbsp;<small>&nbsp;0493</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso">Franc&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0478</small></td>
        <td><Link className="nombreCurso">Gallego (CUID)</Link>,&nbsp;<small>&nbsp;0494</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso">Ingl&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0479</small></td>
        <td><Link className="nombreCurso">Italiano (CUID)</Link>,&nbsp;<small>&nbsp;0490</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso">Portugu&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0481</small></td>
        <td><Link className="nombreCurso">Ruso (CUID)</Link>,&nbsp;<small>&nbsp;0483</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso">Japon&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0484</small></td>
        <td><Link className="nombreCurso">Valenciano (CUID)</Link>,&nbsp;<small>&nbsp;0488</small></td>
      </tr>
    </table>
  );
}

const Carreras = () => {

  const [cantidadSoluciones, setCantidadSoluciones] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:8080/carreras/cantidadSoluciones') //Modificar en entorno de produccion response.data
      .then(response => {
        setCantidadSoluciones(response.data);
      })
  }, []);

  return (
    <div className="cursos">
      <p className="numSoluciones">Disponemos de <strong>{cantidadSoluciones} enunciados y soluciones</strong></p>
      <div className="curso">
        <h1>Cursos de <strong>Acceso</strong></h1>
        <TablaCursosDeAcceso />
      </div>
      <div className="curso">
        <h1><strong>Grados</strong> EEES</h1>
        <TablaGrados />
      </div>
      <div className="curso">
        <h1><strong>Másteres</strong> EEES</h1>
        <TablaMasteres />
      </div>
      <div className="curso tablaIdiomas">
        <h1><strong>Idiomas</strong></h1>
        <TablaIdiomas />
      </div>
    </div>

  )
};

export default Carreras;