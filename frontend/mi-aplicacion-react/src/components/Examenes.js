import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/examenesStyle.css';

const Examenes = () => {

    const location = useLocation();
    const asignaturas = location.state?.selectedAsignaturas || [];

    console.log(asignaturas)

    return (
        <div className="todoExamenes">
            {asignaturas.map((asignatura, index) => (
                <div>
                    <h1>{asignatura.nombreAsignatura} <span className="asignaturaId">{asignatura.idAsignatura}</span></h1>
                    <thead>
                        <tr>
                            <th></th>
                            <th colSpan="4">Febrero</th>
                            <th colSpan="4">Junio</th>
                            <th colSpan="4">Septiembre</th>
                        </tr>
                        <tr>
                            <th>Curso</th>
                            <th>1ª Sem.</th>
                            <th>2ª Sem.</th>
                            <th>Orig.</th>
                            <th>Res.</th>
                            <th>1ª Sem.</th>
                            <th>2ª Sem.</th>
                            <th>Orig.</th>
                            <th>Res.</th>
                            <th>1º Parc.</th>
                            <th>2º Parc.</th>
                            <th>Orig.</th>
                            <th>Res.</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </div>
            ))}
        </div>
    );
};

export default Examenes;