import '../css/carrerasStyle.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getCantidadSoluciones, getFacultades } from '../services/backendService';


// <i class="fa fa-chevron-up"></i>

function TablaCursosDeAcceso() {
  return (
    <table>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0001">Curso de acceso para <strong>mayores de 25 a&ntilde;os</strong></Link></td>
        <td><Link className="nombreCurso" to="/asignaturas/0002">Curso de acceso para <strong>mayores de 45 a&ntilde;os</strong></Link></td>
      </tr>
    </table>
  );
}

function TablaGrados() {
  return (
    <table>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6502">Administración y Dirección de Empresas</Link>,&nbsp;<small>&nbsp;6502</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/7002">Antropología Social y Cultural</Link>,&nbsp;<small>&nbsp;7002</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6601">Ciencias Jurídicas de las Administraciones Públicas</Link>,&nbsp;<small>&nbsp;6601</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6901">Ciencia política y de la Administración</Link>,&nbsp;<small>&nbsp;6901</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6101">Ciencias Ambientales</Link>,&nbsp;<small>&nbsp;6101</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6604">Criminología</Link>,&nbsp;<small>&nbsp;6604</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6602">Derecho</Link>,&nbsp;<small>&nbsp;6602</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6501">Economía</Link>,&nbsp;<small>&nbsp;6501</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6303">Educación infantil</Link>,&nbsp;<small>&nbsp;6303</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6301">Educación Social</Link>,&nbsp;<small>&nbsp;6301</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6402">Estudios Ingleses</Link>,&nbsp;<small>&nbsp;6402</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/7001">Filosofía</Link>,&nbsp;<small>&nbsp;7001</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6104">Física</Link>,&nbsp;<small>&nbsp;6104</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6701">Geografía e Historia</Link>,&nbsp;<small>&nbsp;6701</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6702">Historia del Arte</Link>,&nbsp;<small>&nbsp;6702</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6802">Ingeniería Electrónica Industrial y automática</Link>,&nbsp;<small>&nbsp;6802</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6801">Ingeniería Eléctrica</Link>,&nbsp;<small>&nbsp;6801</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6805">Ingeniería Energía</Link>,&nbsp;<small>&nbsp;6805</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6804">Ingeniería Tecnología Industrial</Link>,&nbsp;<small>&nbsp;6804</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/7102">Ingeniería Tecnologías Información</Link>,&nbsp;<small>&nbsp;7102</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/7101">Ingeniería Informática</Link>,&nbsp;<small>&nbsp;7101</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6803">Ingeniería Mecánica</Link>,&nbsp;<small>&nbsp;6803</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6401">Lengua y Literatura Españolas</Link>,&nbsp;<small>&nbsp;6401</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6102">Matemáticas</Link>,&nbsp;<small>&nbsp;6102</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6302">Pedagogía</Link>,&nbsp;<small>&nbsp;6302</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6201">Psicología</Link>,&nbsp;<small>&nbsp;6201</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6103">Química</Link>,&nbsp;<small>&nbsp;6103</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6902">Sociología</Link>,&nbsp;<small>&nbsp;6902</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/6603">Trabajo Social</Link>,&nbsp;<small>&nbsp;6603</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/6503">Turismo</Link>,&nbsp;<small>&nbsp;6503</small></td>
      </tr>
    </table>
  );
}

function TablaMasteres() {
  const [facultades, setFacultades] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    getFacultades()
      .then(data => {
        setFacultades(data);
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
              <p className="master" key={masterIndex}><Link className="nombreCurso" to={"/asignaturas/" + master.idCarrera}>{master.nombreCortoCarrera},&nbsp;<small>{master.idCarrera}</small></Link></p>
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
        <td><Link className="nombreCurso" to="/asignaturas/0476">Alem&aacute;n (CUID)</Link>,&nbsp;<small>&nbsp;0476</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0477">&Aacute;rabe (CUID)</Link>,&nbsp;<small>&nbsp;0477</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0492">Catal&aacute;n (CUID)</Link>,&nbsp;<small>&nbsp;0492</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0480">Chino (CUID)</Link>,&nbsp;<small>&nbsp;0480</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0491">Espa&ntilde;ol (CUID)</Link>,&nbsp;<small>&nbsp;0491</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0493">Euskera (CUID)</Link>,&nbsp;<small>&nbsp;0493</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0478">Franc&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0478</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0494">Gallego (CUID)</Link>,&nbsp;<small>&nbsp;0494</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0479">Ingl&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0479</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0490">Italiano (CUID)</Link>,&nbsp;<small>&nbsp;0490</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0481">Portugu&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0481</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0483">Ruso (CUID)</Link>,&nbsp;<small>&nbsp;0483</small></td>
      </tr>
      <tr>
        <td><Link className="nombreCurso" to="/asignaturas/0484">Japon&eacute;s (CUID)</Link>,&nbsp;<small>&nbsp;0484</small></td>
        <td><Link className="nombreCurso" to="/asignaturas/0488">Valenciano (CUID)</Link>,&nbsp;<small>&nbsp;0488</small></td>
      </tr>
    </table>
  );
}

const Carreras = () => {

  const [cantidadSoluciones, setCantidadSoluciones] = useState(null);

  useEffect(() => {
    getCantidadSoluciones()
      .then(data => {
        setCantidadSoluciones(data.toLocaleString("es-ES")); //Metodo toLocaleString me pone el punto para separar los millares
      })
  }, []);

  return (
    <div className="cursos">
      <p className="numSoluciones">Disponemos de <strong>{cantidadSoluciones} enunciados y soluciones</strong></p>
      <div className="curso">
        <h1 className="h1Carreras">Cursos de <strong>Acceso</strong></h1>
        <TablaCursosDeAcceso />
      </div>
      <div className="curso">
        <h1 className="h1Carreras"><strong>Grados</strong> EEES</h1>
        <TablaGrados />
      </div>
      <div className="curso">
        <h1 className="h1Carreras"><strong>Másteres</strong> EEES</h1>
        <TablaMasteres />
      </div>
      <div className="curso tablaIdiomas">
        <h1 className="h1Carreras"><strong>Idiomas</strong></h1>
        <TablaIdiomas />
      </div>
    </div>
  )
};

export default Carreras;