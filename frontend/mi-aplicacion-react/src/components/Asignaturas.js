import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';

const Asignaturas = () => {

    const { idCarrera } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/asignaturas?carrera=' + idCarrera) //Hacer clase llamada backendService para juntar toda esta logica
          .then(response => {
            console.log(response.data);
          })
      }, []);

  return (
    <div class="asignaturas">
      <h1>{idCarrera}</h1>
    </div>
  );
};

export default Asignaturas;
