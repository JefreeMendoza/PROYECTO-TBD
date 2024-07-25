import React from 'react';
import AlumnoList from '../Components/AlumnoList';
import NavBar from "../Components/NavBar";

const Listado = () => {
    return (
        <div>
            <NavBar />
            <h1>Listado de Alumnos</h1>
            <AlumnoList />
        </div>
    );
};

export default Listado;
