const { request, response } = require('express');

// Controladores de las rutas de usuarios

// Datos de alumnos FAKE
const usuarios = [
    {
        id: 1,
        empresa: 'Empresa1',
        nombre: 'Juan',
        apellidos: 'Gómez Pérez',
        email: 'juan.gomez@example.com',
        dni: '12345678A'
    },
    {
        id: 2,
        empresa: 'Empresa2',
        nombre: 'María',
        apellidos: 'Rodríguez López',
        email: 'maria.rodriguez@example.com',
        dni: '23456789B'
    },
    {
        id: 3,
        empresa: 'Empresa3',
        nombre: 'Carlos',
        apellidos: 'García Martínez',
        email: 'carlos.garcia@example.com',
        dni: '34567890C'
    },
    {
        id: 4,
        empresa: 'Empresa4',
        nombre: 'Laura',
        apellidos: 'Fernández González',
        email: 'laura.fernandez@example.com',
        dni: '45678901D'
    },
    {
        id: 5,
        empresa: 'Empresa5',
        nombre: 'Pedro',
        apellidos: 'López Sánchez',
        email: 'pedro.lopez@example.com',
        dni: '56789012E'
    },
    {
        id: 6,
        empresa: 'Empresa6',
        nombre: 'Ana',
        apellidos: 'Pérez Rodríguez',
        email: 'ana.perez@example.com',
        dni: '67890123F'
    },
    {
        id: 7,
        empresa: 'Empresa7',
        nombre: 'José',
        apellidos: 'Martínez Gómez',
        email: 'jose.martinez@example.com',
        dni: '78901234G'
    },
    {
        id: 8,
        empresa: 'Empresa8',
        nombre: 'Sofía',
        apellidos: 'González López',
        email: 'sofia.gonzalez@example.com',
        dni: '89012345H'
    },
    {
        id: 9,
        empresa: 'Empresa9',
        nombre: 'Miguel',
        apellidos: 'Sánchez Rodríguez',
        email: 'miguel.sanchez@example.com',
        dni: '90123456I'
    },
    {
        id: 10,
        empresa: 'Empresa10',
        nombre: 'Elena',
        apellidos: 'López Fernández',
        email: 'elena.lopez@example.com',
        dni: '01234567J'
    },
    {
        id: 11,
        empresa: 'Empresa1',
        nombre: 'Ana',
        apellidos: 'Torres García',
        email: 'ana.torres@example.com',
        dni: '34567891K'
    },
    {
        id: 12,
        empresa: 'Empresa1',
        nombre: 'Luis',
        apellidos: 'Ramírez Sánchez',
        email: 'luis.ramirez@example.com',
        dni: '45678902L'
    },
    {
        id: 13,
        empresa: 'Empresa1',
        nombre: 'Carmen',
        apellidos: 'Morales Pérez',
        email: 'carmen.morales@example.com',
        dni: '56789013M'
    },
    {
        id: 14,
        empresa: 'Empresa2',
        nombre: 'Javier',
        apellidos: 'López Martín',
        email: 'javier.lopez@example.com',
        dni: '67890124N'
    },
    {
        id: 15,
        empresa: 'Empresa2',
        nombre: 'Marina',
        apellidos: 'González Ruiz',
        email: 'marina.gonzalez@example.com',
        dni: '78901235O'
    },
    {
        id: 16,
        empresa: 'Empresa2',
        nombre: 'David',
        apellidos: 'Rodríguez Jiménez',
        email: 'david.rodriguez@example.com',
        dni: '89012346P'
    },
    {
        id: 17,
        empresa: 'Empresa3',
        nombre: 'Laura',
        apellidos: 'Sánchez Torres',
        email: 'laura.sanchez@example.com',
        dni: '90123457Q'
    },
    {
        id: 18,
        empresa: 'Empresa3',
        nombre: 'Daniel',
        apellidos: 'Hernández Castro',
        email: 'daniel.hernandez@example.com',
        dni: '01234568R'
    },
    {
        id: 19,
        empresa: 'Empresa3',
        nombre: 'Marta',
        apellidos: 'Gómez Silva',
        email: 'marta.gomez@example.com',
        dni: '12345679S'
    },
    {
        id: 20,
        empresa: 'Empresa4',
        nombre: 'Sergio',
        apellidos: 'Fernández López',
        email: 'sergio.fernandez@example.com',
        dni: '23456780T'
    }
];

const userGet = async ( req = request, res = response ) => {

    const { empresa, dni, email, nombre, apellidos } = req.query;

    let results = [];

    results = usuarios.filter( user => user.empresa.includes( empresa ) && user.dni.includes( dni ) && user.email.includes( email ) && user.nombre.includes( nombre ) && user.apellidos.includes( apellidos ));
    

    res.json({ usuarios: results });

}

module.exports = {
    userGet
}