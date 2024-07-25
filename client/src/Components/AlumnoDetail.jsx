import React, { useEffect, useState } from 'react';
import { getAlumnoById } from '../api/auth.js';
import { useParams } from 'react-router-dom';

const AlumnoDetail = () => {
    const { id } = useParams();
    const [alumno, setAlumno] = useState(null);

    useEffect(() => {
        const fetchAlumno = async () => {
            const response = await getAlumnoById(id);
            setAlumno(response.data);
        };
        fetchAlumno();
    }, [id]);

    if (!alumno) return <div>Loading...</div>;

    return (
        <div>
            <h1>Detalle del Alumno</h1>
            <p>Nombre: {alumno.username}</p>
            <p>Curso: {alumno.course}</p>
            <p>Nota 1: {alumno.noteone}</p>
            <p>Nota 2: {alumno.notetwo}</p>
            <p>Promedio: {alumno.promnotes}</p>
            <p>Condición: {alumno.condicion}</p>
            <p>Fecha de Registro: {new Date(alumno.registrationDate).toLocaleDateString()}</p>
        </div>
    );
};

export default AlumnoDetail;
