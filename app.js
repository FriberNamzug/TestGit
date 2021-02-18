const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla multiplicar', {
        base: {
            demand: true, //a fuerzas se necesita el parametro
            alias: "b"
        },
        limite: {
            demand: false,
            alias: "l",
            default: 10,
        }
    }).command('crear', 'Crea un archivo con la tabla de multiplicar!', {
        base: {
            demand: true, //a fuerzas se necesita el parametro
            alias: "b"
        },
        limite: {
            demand: false,
            alias: "l",
            default: 10,
        }
    }).argv


const multiplicar = require('./multiplicacion/multiplicacion.js')



let comando = argv._[0]

switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite)
            .then()
            .catch(error => console.log(`Ocurrio un error: ${error}`))
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
            .catch(error => console.log(`Ocurrio un error: ${error}`))
        break;
    default:
        console.log('Comando no reconocido')
        break;
}