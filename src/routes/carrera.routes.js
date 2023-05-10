import { Router } from "express";
import { getCarreras, getCarrera, crearCarrera, getEstudiantesPorCarrera } from "../controllers/carrera.controller.js";

const router = Router();

router.get('/carreras', getCarreras);
router.get('/carreras/:id', getCarrera);
router.post('/carreras', crearCarrera);

router.get('/estudiantesPorCarrera/:id', getEstudiantesPorCarrera);


export default router;