import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();


import authRoutes from "./Routes/auth.routes.js";


const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// Usar CORS para permitir solicitudes desde otros dominios

// Usar body-parser para analizar cuerpos de solicitudes JSON
app.use(bodyParser.json());


app.use(authRoutes);
/* app.use('/api/students', studentRoutes); */


export default app;