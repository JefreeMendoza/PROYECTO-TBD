import Persona from "../Models/persona.model.js";
import Alumno from "../Models/alumno.model.js";


export const createAlumno = async (req, res) => {
    try {
        const alumno = new Alumno(req.body);
        await alumno.save();
        res.status(201).json(alumno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAlumnoById = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno not found' });
        res.status(200).json(alumno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};






/* export const createPersona = async (req, res) => {
    try {
        const persona = new Persona(req.body);
        await persona.save();
        res.status(201).json(persona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPersonas = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.status(200).json(personas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPersonaById = async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        if (!persona) return res.status(404).json({ message: 'Persona not found' });
        res.status(200).json(persona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; */




/* 
export const updateAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!alumno) return res.status(404).json({ message: 'Alumno not found' });
        res.status(200).json(alumno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteAlumno = async (req, res) => {
    try {
        const alumno = await alumno.findByIdAndDelete(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno not found' });
        res.status(200).json({ message: 'Alumno deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; */






/* export const register = async (req, res) => {
    const { username, course, noteone, notetwo } = req.body

    try {
        const newAlumno = new Alumno({
            username,
            course,
            noteone,
            notetwo
        })

        console.log(newAlumno)
        const userSaved = await newAlumno.save();
        res.json(userSaved);

    } catch (error) {
        console.log(error)
    }

}
 */

