import axios from 'axios';


//En esta clase se recoge toda la logica para comunicarse con el backend
//Los diferentes componentes de react llaman a estos metodos cuando necesitan informacion de la base de datos

const BASE_URL = "http://localhost:8080"; //Cambiar en entorno de produccion

export const getFacultades = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/facultades`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo facultades:", error);
        throw error;
    }
};

export const getCantidadSoluciones = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/carreras/cantidadSoluciones`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo cantidadSoluciones:", error);
        throw error;
    }
};

export const getAsignaturasPorCarrera = async (idCarrera) => {
    try {
        const response = await axios.get(`${BASE_URL}/asignaturas?carrera=` + idCarrera);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo asignaturas por carrera:", error);
        throw error;
    }
}

export const getCarreraNameById = async (idCarrera) => {
    try {
        const response = await axios.get(`${BASE_URL}/carreras/carreraNameById/` + idCarrera);
        console.log("Desde el service: " + response.data)
        return response.data;
    } catch (error) {
        console.error("Error obteniendo carreraNameById:", error);
        throw error;
    }
}

export const getCursosDeAsignaturas = async (asignaturas) => {
    if (!asignaturas || asignaturas.length === 0) return {};

    try {
        const responses = await Promise.all(
            asignaturas.map(asignatura =>
                axios.get(`${BASE_URL}/asignaturas/cursos?asignatura=${asignatura.idAsignatura}`)
            )
        );

        const cursosPorAsignatura = {};
        asignaturas.forEach((asignatura, index) => {
            cursosPorAsignatura[asignatura.idAsignatura] = responses[index].data;
        });

        return cursosPorAsignatura;
    } catch (error) {
        console.error("Error obteniendo los cursos:", error);
        throw error;
    }
}