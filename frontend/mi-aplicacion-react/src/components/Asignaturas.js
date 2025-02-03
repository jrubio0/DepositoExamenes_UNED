import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Asignaturas = () => {

  const { idCarrera } = useParams();
  const [asignaturas, setAsignaturas] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/asignaturas?carrera=' + idCarrera)
      .then(response => {
        console.log(response.data);
        const cursos = { 1: [], 2: [], 3: [], 4: [] };
        response.data.forEach(asignatura => {
          if (cursos[asignatura.curso]) {
            cursos[asignatura.curso].push(asignatura);
          }
        });
        setAsignaturas(cursos);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {[1, 2, 3, 4].map((curso, index) => (
        <div key={curso}>
          <h2>Curso {curso}</h2>
          <ul>
            {asignaturas[curso]?.map(asignatura => (
              <li key={asignatura.idAsignatura}>{asignatura.nombreAsignatura}, <small>{asignatura.idAsignatura}{asignatura.idTipoasignatura === '0' && ', Extinguida'}</small></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Asignaturas;
