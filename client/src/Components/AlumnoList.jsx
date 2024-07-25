import React, { useEffect, useState } from 'react';
import { getAlumnos } from '../api/auth';
import { Link } from 'react-router-dom';
import "./Styles/AlumnoList.css"

const AlumnoList = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchAlumnos = async () => {
            const response = await getAlumnos();
            setAlumnos(response.data);
        };
        fetchAlumnos();
    }, []);

    return (
        <div>
            <h1>Esta es la catidad de Alumnos</h1>
            <ul>
                {alumnos.map((alumno) => (
                    <li key={alumno._id}>
                        <Link to={`/alumno/${alumno._id}`}>{alumno.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumnoList;
