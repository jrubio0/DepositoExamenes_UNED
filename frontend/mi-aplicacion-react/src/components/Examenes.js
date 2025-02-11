import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/examenesStyle.css';

const Examenes = () => {

    const location = useLocation();
    const asignaturas = location.state?.selectedAsignaturas || [];
    const [cursos, setCursos] = useState({});


    useEffect(() => {
        if (asignaturas.length === 0) return;
        const fetchCursos = async () => {
            try {
                const responses = await Promise.all(
                    asignaturas.map(asignatura =>
                        axios.get(`http://localhost:8080/asignaturas/cursos?asignatura=${asignatura.idAsignatura}`)
                    )
                );
                const cursosPorAsignatura = {};
                asignaturas.forEach((asignatura, index) => {
                    cursosPorAsignatura[asignatura.idAsignatura] = responses[index].data;
                });

                setCursos(cursosPorAsignatura);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchCursos();
        console.log(cursos)
    }, []);


    const getExamenesPorConvocatoria = (curso, convocatoria) => {
        return curso.examenes?.filter(examen => examen.idConvocatoriaExamen === convocatoria) || [];
    }

    const getYears = (year) => {
        let num = parseInt(year);
        return "20" + (year - 1) + "/" + year;
    }




    return (
        <div className="todoExamenes">
            {asignaturas.map((asignatura, index) => (
                <div>
                    <h1>{asignatura.nombreAsignatura} <span className="asignaturaId">{asignatura.idAsignatura}</span></h1>
                    <table>
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
                        <tbody>
                            {cursos[asignatura.idAsignatura]?.map((curso) => (
                                <tr>
                                    <td className="cellYear"><div className="cellContent">{getYears(curso.num)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "F1").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "F2").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "FO").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "FR").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "J1").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "J2").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "JO").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "JR").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "S1").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "S2").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "SO").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                    <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "SR").map(examen => <div>{examen.idConvocatoriaExamen}</div>)}</div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            ))}
        </div>
    );
};

export default Examenes;