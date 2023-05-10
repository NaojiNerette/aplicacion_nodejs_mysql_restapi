import { pool } from '../db.js';


export const getCarreras = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM carreras');
        res.json(rows);    
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        });
    }   
};

export const getCarrera = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM carreras WHERE id_carrera = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Carrera no encontrada'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        }); 
    }
};

export const crearCarrera = async (req, res) => {
    try {
        const {nombre} = req.body;
        const [rows] = await pool.query('INSERT INTO carreras (nombre) VALUES (?)', [nombre]);
        res.send({
            id: rows.insertId,
            nombre
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        }); 
    }   
};

export const getEstudiantesPorCarrera = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM estudiantes WHERE id_carrera = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Sin registros encontrados'
        });
        res.json({
            cantidad: rows.length,
            estudiantes: rows
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        });
    }
};


