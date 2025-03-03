import '../css/asignaturasStyle.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAsignaturasPorCarrera, getCarreraNameById } from '../services/backendService';

const Asignaturas = () => {

  const navigate = useNavigate();
  const { idCarrera } = useParams();
  const [asignaturas, setAsignaturas] = useState({});
  const [carrera, setCarrera] = useState('');
  //En la web antigua si no es de los cuatro primeros cursos directamente no pone nada
  const nombresCursos = ["", "Primer curso", "Segundo curso", "Tercer curso", "Cuarto curso", "", "", ""];
  const [selectedAsignaturas, setSelectedAsignaturas] = useState([]);

  useEffect(() => {
    getAsignaturasPorCarrera(idCarrera)
      .then(data => {
        const cursos = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
        data.forEach(asignatura => {
          if (cursos[asignatura.curso]) {
            cursos[asignatura.curso].push(asignatura);
          }
        });
        setAsignaturas(cursos);
      })
      .catch(error => console.error("Error fetching data:", error));

    getCarreraNameById(idCarrera)
      .then(response => {
        setCarrera(response);
      })
  }, []); //Agregar idCarrera dentro del array?

  const handleCheckboxChange = (event) => {
    const { id, value, checked } = event.target;
    if (checked) {
      setSelectedAsignaturas(prev => [...prev, { nombreAsignatura: value, idAsignatura: id }]);
    } else {
      setSelectedAsignaturas(prev => prev.filter(asignatura => asignatura.idAsignatura !== id));
    }
  };

  const handleContinuar = () => {
    navigate("/examenes", { state: { selectedAsignaturas: selectedAsignaturas } });

  }

  return (
    <div className="todoAsignaturas">
      <div className="nombreCarrera">
        <p className="nombreCarreraP">Exámenes de <strong>{carrera}</strong> </p>
        <small>Seleccione las asignaturas deseadas y pulse el botón Continuar</small>
      </div>
      <div className="asigCursos">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((curso, index) => (
          <>
            {asignaturas[curso]?.length !== 0 && (
              <div className="asigCurso" key={curso}>
                <p><strong>{nombresCursos[index]}</strong></p>
                {asignaturas[curso]?.map(asignatura => (
                  <div className="asigCheckBox">
                    <input type="checkbox" id={asignatura.idAsignatura} value={asignatura.nombreAsignatura} onChange={handleCheckboxChange} />
                    <label className="asigCheckBoxLabel" key={asignatura.idAsignatura}>{asignatura.nombreAsignatura}, <span className="labelSpan">{asignatura.idAsignatura}{asignatura.idTipoasignatura === '0' && ', Extinguida'}</span></label>
                  </div>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
      <div className="continuar">
        <button className="continuarButton" onClick={handleContinuar}>Continuar</button>
      </div>
    </div>
  );
};

export default Asignaturas;
