import axios from "axios";

const API = 'http://localhost:3000'

export const getAlumnos = async () => {
    return await axios.get(API);
};

export const getAlumnoById = async (id) => {
    return await axios.get(`${API}/${id}`);
};

export const createAlumno = async (data) => {
    return await axios.post(API, data);
};

export const registerRequest = user => axios.post(`${API}/register`, user);