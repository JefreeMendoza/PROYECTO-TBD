import React from 'react';
import AlumnoForm from '../Components/AlumnoForm';
import NavBar from "../Components/NavBar";

const Ingreso = () => {
    return (
        <div>
            <NavBar />
            <h1>Ingreso de Alumno</h1>
            <AlumnoForm />
        </div>
    );
};

export default Ingreso;
