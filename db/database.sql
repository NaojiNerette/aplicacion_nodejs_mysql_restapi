CREATE DATABASE IF NOT EXIST desafiotecnico;

USE desafiotecnico;

CREATE TABLE estudiantes(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(300) DEFAULT(NULL),
    edad INT(3) DEFAULT NULL,
    id_carrera INT(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE estudiantes;

INSERT INTO estudiantes (nombre, edad) VALUES 
('Pedro', 21),
('Juan', 33),
('Diego', 45);

CREATE TABLE carreras(
    id_carrera INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(300) DEFAULT(NULL),
    PRIMARY KEY (id_carrera)
);

INSERT INTO carreras (nombre) VALUES 
('Arquitectura'),
('Agronomia'),
('Derecho'),
('Enfermeria'),
('Ingenieria Civil Industrial'),
('Ingenieria Comercial'),
('Ingenieria en Informatica'),
('Kinesiologia');