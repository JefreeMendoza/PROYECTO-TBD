import React from 'react';
/* import AlumnoForm from '../Components/AlumnoForm'; */
import NavBar from "../../Components/NavBar";
import PersonasMenu from '../../Components/PersonasMenu';
import PersonasForm from '../../Components/PersonasComp/PersonasForm';


const IngresoPer = () => {
    return (
        <div>
            <NavBar />
            {/* <PersonasMenu /> */}
            <h1>Ingreso de Personas</h1>
            <h2>Aqui se van a ingresar todas las personas </h2>
            <h3>Aqui va el form </h3>
            {/* <AlumnoForm /> */}
            <PersonasForm />
        </div>
    );
};

export default IngresoPer;
