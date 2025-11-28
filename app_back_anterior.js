//const { crearArchivo } = require('./controllers/multiplicar')
import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
            .option('b', {
                alias: 'base',
                type:  'number'
            })
            .parse();

//const argv = require('yargs').argv;

// import yargs from 'yargs'
// const argv = yargs(process.argv.slice(2))
//     .option('f', {
//         alias: 'file',
//         demandOption: true,
//         default: '/etc/passwd',
//         describe: 'x marks the spot',
//         type: 'string'
//     })
//     .parse()
// ;



console.clear();

console.log( process.argv);
console.log( argv )

console.log('base: yargs', argv.base);


//console.log(process.argv);

/* const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');
console.log(base); */

// const base = 5;


// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'Creado con exito...!!!!!') )
//     .catch(err => console.log(err));
