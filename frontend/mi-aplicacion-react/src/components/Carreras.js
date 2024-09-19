import React from 'react';
import imgDeposito from '../img/depositoExamenes-Acceso.jpg'; // Importa la imagen del depósito de exámenes
import carrerasStyle from '../css/carrerasStyle.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TablaCursosDeAcceso() {
  return (
    <table>
      <tr>
        <td><Link class="nombreCurso" to="/prueba">Curso de acceso para <strong>mayores de 25 a&ntilde;os</strong></Link></td>
        <td><a class="nombreCurso" href="">Curso de acceso para <strong>mayores de 45 a&ntilde;os</strong></a></td>
      </tr>
    </table>
  );
}

function TablaGrados() {
  return (
    <table>
      <tr>
        <td><a class="nombreCurso" href="">Administración y Dirección de Empresas</a>,&nbsp;<small>&nbsp;6502</small></td>
        <td><a class="nombreCurso" href="">Antropología Social y Cultural</a>,&nbsp;<small>&nbsp;7002</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Ciencias Jurídicas de las Administraciones Públicas</a>,&nbsp;<small>&nbsp;6601</small></td>
        <td><a class="nombreCurso" href="">Ciencia política y de la Administración</a>,&nbsp;<small>&nbsp;6901</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Ciencias Ambientales</a>,&nbsp;<small>&nbsp;6101</small></td>
        <td><a class="nombreCurso" href="">Criminología</a>,&nbsp;<small>&nbsp;6604</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Derecho</a>,&nbsp;<small>&nbsp;6602</small></td>
        <td><a class="nombreCurso" href="">Economía</a>,&nbsp;<small>&nbsp;6501</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Educación infantil</a>,&nbsp;<small>&nbsp;6303</small></td>
        <td><a class="nombreCurso" href="">Educación Social</a>,&nbsp;<small>&nbsp;6301</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Estudios Ingleses</a>,&nbsp;<small>&nbsp;6402</small></td>
        <td><a class="nombreCurso" href="">Filosofía</a>,&nbsp;<small>&nbsp;7001</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Física</a>,&nbsp;<small>&nbsp;6104</small></td>
        <td><a class="nombreCurso" href="">Geografía e Historia</a>,&nbsp;<small>&nbsp;6701</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Historia del Arte</a>,&nbsp;<small>&nbsp;6702</small></td>
        <td><a class="nombreCurso" href="">Ingeniería Electrónica Industrial y automática</a>,&nbsp;<small>&nbsp;6802</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Ingeniería Eléctrica</a>,&nbsp;<small>&nbsp;6801</small></td>
        <td><a class="nombreCurso" href="">Ingeniería Energía</a>,&nbsp;<small>&nbsp;6805</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Ingeniería Tecnología Industrial</a>,&nbsp;<small>&nbsp;6804</small></td>
        <td><a class="nombreCurso" href="">Ingeniería Tecnologías Información</a>,&nbsp;<small>&nbsp;7102</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Ingeniería Informática</a>,&nbsp;<small>&nbsp;7101</small></td>
        <td><a class="nombreCurso" href="">Ingeniería Mecánica</a>,&nbsp;<small>&nbsp;6803</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Lengua y Literatura Españolas</a>,&nbsp;<small>&nbsp;6401</small></td>
        <td><a class="nombreCurso" href="">Matemáticas</a>,&nbsp;<small>&nbsp;6102</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Pedagogía</a>,&nbsp;<small>&nbsp;6302</small></td>
        <td><a class="nombreCurso" href="">Psicología</a>,&nbsp;<small>&nbsp;6201</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Química</a>,&nbsp;<small>&nbsp;6103</small></td>
        <td><a class="nombreCurso" href="">Sociología</a>,&nbsp;<small>&nbsp;6902</small></td>
      </tr>
      <tr>
        <td><a class="nombreCurso" href="">Trabajo Social</a>,&nbsp;<small>&nbsp;6603</small></td>
        <td><a class="nombreCurso" href="">Turismo</a>,&nbsp;<small>&nbsp;6503</small></td>
      </tr>
    </table>
  );
}

function TablaMasteres() {
  
}

function TablaIdiomas() {

}

const Carreras = () => {
  return (
    <div class="cursos">
      <p class="numSoluciones">Disponemos de <strong>77605 enunciados y soluciones</strong></p>
      <div class="curso">
        <h1>Cursos de <strong>Acceso</strong></h1>
        <TablaCursosDeAcceso/>
      </div>
      <div class="curso">
        <h1><strong>Grados</strong> EEES</h1>
        <TablaGrados/>
      </div>
      <div class="curso">
        <h1><strong>Másteres</strong> EEES</h1>
        <TablaMasteres/>
      </div>
      <div class="curso">
        <h1><strong>Idiomas</strong></h1>
        <TablaIdiomas/>
      </div> 
    </div>
    
)};



export default Carreras;