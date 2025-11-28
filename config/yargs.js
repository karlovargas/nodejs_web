import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
            .option('b', {
                alias: 'base',
                type:  'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type:  'boolean',
                default: false,
                describe: "Muestra los datos en consola"
            })
            .option('h', {
                alias: 'hasta',
                type:  'number',
                default: 10,
                describe: "Imprime la tabla hasta un limite definido por el usuario"
            })
            .check((argv, options) => {
                //console.log('yargs', argv)
                if (isNaN( argv.b )) {
                    throw 'La base tiene que ser un Número'
                }
                return true
            })
            .parse();

export { argv }