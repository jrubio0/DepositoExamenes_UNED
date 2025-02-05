import React from 'react';
import { useLocation } from 'react-router-dom';

const Examenes = () => {

    const location = useLocation();
    const asignaturas = location.state?.selectedAsignaturas || [];

    console.log(asignaturas)

    return (
        <div>
            <h1>Examenes</h1>
        </div>
    );
};

export default Examenes;