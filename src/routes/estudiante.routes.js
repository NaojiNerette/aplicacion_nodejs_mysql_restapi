import { Router } from "express";
import { getEstudiantes, crearEstudiante, actualizarEstudiante, eliminarEstudiante, getEstudiante } from "../controllers/estudiante.controller.js";

const router = Router();

router.get('/estudiantes', getEstudiantes);
router.get('/estudiantes/:id', getEstudiante);
router.post('/estudiantes', crearEstudiante);
router.patch('/estudiantes/:id', actualizarEstudiante);
router.delete('/estudiantes/:id', eliminarEstudiante);

export default router;