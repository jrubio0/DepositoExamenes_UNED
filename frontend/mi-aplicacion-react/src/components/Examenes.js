import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/examenesStyle.css';
import { getCursosDeAsignaturas } from '../services/backendService';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const Examenes = () => {

    const backendBaseURL = "http://localhost:8080/pdf?url="; //Cambiar en entorno de produccion
    const navigate = useNavigate();
    const location = useLocation();
    const asignaturas = location.state?.selectedAsignaturas || [];
    const [cursos, setCursos] = useState({});


    useEffect(() => {
        if (asignaturas.length === 0) return;
        const fetchCursos = async () => {
            try {
                const cursosObtenidos = await getCursosDeAsignaturas(asignaturas);
                setCursos(cursosObtenidos);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCursos();
    }, []);

    const hayRespuestas = (curso) => {
        return curso.examenes?.some((examen) => examen.idTipoArchivo === '1');
    }

    //En la base de datos el idTipoArchivo = 0 es examen y el idTipoArchivo = 1 es respuesta
    const getExamenesPorConvocatoria = (curso, convocatoria) => {
        return curso.examenes?.filter(examen => examen.idConvocatoriaExamen === convocatoria && examen.idTipoArchivo === '0') || [];
    }

    const getRespuestasPorConvocatoria = (curso, convocatoria) => {
        return curso.examenes?.filter(examen => examen.idConvocatoriaExamen === convocatoria && examen.idTipoArchivo === '1') || [];
    }

    const getYears = (year) => {
        let num = parseInt(year);
        //Sin este if el 2009 lo escribe como 209
        if (num <= 10) {
            return "200" + (year - 1) + "/" + year;
        } else {
            return "20" + (year - 1) + "/" + year;
        }

    }

    const getRutaIcono = (examen) => {
        const tipoArchivo = examen.idTipoArchivo === '0' ? 'e' : 's';
        const tipoExamen = examen.tipoExamen === '-' ? '' : examen.tipoExamen;
        return "iconosExamenes/" + tipoArchivo + "-" + tipoExamen + ".png";
    }

    const getRutaExamen = (examen) => {
        return "http://www.calatayud.uned.es" + examen.rutaFichero + examen.nombreFichero;
    }

    const cuentaExamenes = (soluciones) => {
        const tipoArchivo = soluciones ? '1' : '0';
        let contador = 0;
        asignaturas.map((asignatura, index) => (
            cursos[asignatura.idAsignatura]?.map(curso => (
                curso.examenes.map(examen => {
                    if (examen.idTipoArchivo === tipoArchivo) {
                        contador++;
                    }
                })))))
        return contador;
    }

    const hasAnyExamen = (idAsignatura) => {
        return cursos[idAsignatura]?.some(curso => curso.examenes.length > 0);
    }

    const getLastCursoAcademico = (idAsignatura) => {
        let lastCursoAcademico = 0;

        cursos[idAsignatura]?.map(curso => (
            curso.examenes.map(examen => {
                if (examen.idCursoAcademico > lastCursoAcademico) {
                    lastCursoAcademico = examen.idCursoAcademico;
                }
            })))
        return lastCursoAcademico;
    }

    const fillPdfs = (idAsignatura) => {

        const pdfs = [];

        if (idAsignatura) {
            const lastCursoAcademico = getLastCursoAcademico(idAsignatura);
            cursos[idAsignatura]?.map(curso => (
                curso.examenes.map(examen => {
                    if (examen.idCursoAcademico === lastCursoAcademico) {
                        pdfs.push("http://www.calatayud.uned.es" + examen.rutaFichero + examen.nombreFichero);
                    }
                })))
        } else {
            asignaturas.map((asignatura) => (
                cursos[asignatura.idAsignatura]?.map(curso => (
                    curso.examenes.map(examen => {
                        const lastCursoAcademico = getLastCursoAcademico(asignatura.idAsignatura);
                        if (examen.idCursoAcademico === lastCursoAcademico) {
                            pdfs.push("http://www.calatayud.uned.es" + examen.rutaFichero + examen.nombreFichero);
                        }
                    })))
            ))
        }

        return pdfs;
    }

    const handleVolverDeposito = () => {
        navigate("/");
    }

    const handleDescargar = (idAsignatura) => {

        const pdfs = fillPdfs(idAsignatura);

        const zip = new JSZip();
        const promises = pdfs.map((pdfUrl) =>
            fetch(backendBaseURL + pdfUrl)
                .then((response) => response.blob())
                .then((blob) => {
                    const pdfName = pdfUrl.split('/').pop();
                    zip.file(pdfName, blob);
                })
        );


        Promise.all(promises)
            .then(() => {
                return zip.generateAsync({ type: 'blob' });
            })
            .then((content) => {
                saveAs(content, 'examenes.zip');
            })
            .catch((error) => {
                console.error('Error al crear el archivo ZIP:', error);
            });
    }



    return (
        <div className="todoExamenes">
            {asignaturas.map((asignatura, index) => (
                <div>
                    <h1>{asignatura.nombreAsignatura} <span className="asignaturaId">{asignatura.idAsignatura}</span></h1>

                    {hasAnyExamen(asignatura.idAsignatura) ?
                        <div>
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
                                        <>
                                            <tr>
                                                <td className="cellYear"><div className="cellContent"><small>{getYears(curso.num)}</small></div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "F1").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "F2").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "FO").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "FR").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "J1").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "J2").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "JO").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "JR").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "S1").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "S2").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "SO").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                <td><div className="cellContent">{getExamenesPorConvocatoria(curso, "SR").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                            </tr>
                                            {hayRespuestas(curso) && (
                                                <tr>
                                                    <td className="cellYear"><div className="cellContent"><small>Soluciones</small></div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "F1").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "F2").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "FO").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "FR").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "J1").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "J2").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "JO").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "JR").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "S1").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "S2").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "SO").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                    <td><div className="cellContent">{getRespuestasPorConvocatoria(curso, "SR").map(examen => <a href={getRutaExamen(examen)} target="_blank"><img src={getRutaIcono(examen)} /></a>)}</div></td>
                                                </tr>
                                            )}
                                        </>
                                    ))}
                                </tbody>
                            </table>
                            <button className="descargarButton" onClick={() => handleDescargar(asignatura.idAsignatura)}><i class="fa-solid fa-download"></i> Descargar último año de {asignatura.nombreAsignatura}</button>
                        </div>
                        :
                        <p>En este momento no disponemos de exámenes/soluciones para esta asignatura.</p>}

                </div>
            ))}
            <div className="totalExamenes">
                <p>Dispone de un total de <strong>{cuentaExamenes(false)} exámenes y {cuentaExamenes(true)} soluciones</strong> para las asignaturas seleccionadas.</p>
                <button className="descargarButton" onClick={() => handleDescargar()}><i class="fa-solid fa-download"></i> Descargar últimos años</button>
            </div>
            <div className="volverDeposito">
                <button className="volverDepositoButton" onClick={handleVolverDeposito}><i class="fa-solid fa-arrow-left"></i> Depósito de exámenes</button>
            </div>
        </div>
    );
};

export default Examenes;