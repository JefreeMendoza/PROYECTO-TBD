import { Router } from "express";
import {
    /* createPersona,
    getPersonas,
    getPersonaById, */

    createAlumno,
    getAlumnos,
    getAlumnoById,
    /* updateAlumno,
    deleteAlumno */
} from "../Controllers/auth.controllers.js";

const router = Router();

/* router.post('/', createPersona);
router.get('/', getPersonas);
router.post('/:id', getPersonaById); */

router.post('/', createAlumno);
router.get('/', getAlumnos);
router.post('/:id', getAlumnoById);


/* router.post('/:id', updateAlumno);
router.post('/:id', deleteAlumno); */


export default router;
