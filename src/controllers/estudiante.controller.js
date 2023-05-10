import { pool } from '../db.js';


export const getEstudiantes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM estudiantes');
        res.json(rows);    
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        });
    }   
};

export const getEstudiante = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM estudiantes WHERE id = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        }); 
    }
};

export const crearEstudiante = async (req, res) => {
    try {
        const {nombre, edad, id_carrera} = req.body;
        const [rows] = await pool.query('INSERT INTO estudiantes (nombre, edad, id_carrera) VALUES (?, ?, ?)', [nombre, edad, id_carrera]);
        res.send({
            id: rows.insertId,
            nombre,
            edad,
            id_carrera
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        }); 
    }   
};


export const eliminarEstudiante = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM estudiantes WHERE id = ?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        });  
    }
};

export const actualizarEstudiante = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, edad, id_carrera} = req.body;

        const [result] = await pool.query('UPDATE estudiantes SET nombre = IFNULL(?, nombre) , edad = IFNULL(?, edad), id_carrera = IFNULL(?, id_carrera) WHERE id = ?', [nombre, edad, id_carrera, id]);

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM estudiantes WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ocurrió mal.'
        });  
    }
};
