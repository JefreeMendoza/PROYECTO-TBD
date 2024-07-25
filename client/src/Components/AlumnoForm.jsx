import React, { useState } from 'react';
import { createAlumno } from '../api/auth';
import "./Styles/AlumnoForm.css"

const AlumnoForm = () => {
    const [form, setForm] = useState({
        username: '',
        course: '',
        noteone: '',
        notetwo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAlumno(form);
            alert('Alumno creado con éxito');
            setForm({
                username: '',
                course: '',
                noteone: '',
                notetwo: ''
            });
        } catch (err) {
            console.error(err);
            alert('Error al crear el alumno');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Curso:</label>
                <input
                    type="text"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Nota 1:</label>
                <input
                    type="number"
                    name="noteone"
                    value={form.noteone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Nota 2:</label>
                <input
                    type="number"
                    name="notetwo"
                    value={form.notetwo}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default AlumnoForm;
