const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('listar', 'Listar las tareas por hacer')
    .command('crear', 'crear una lista de tareas', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};