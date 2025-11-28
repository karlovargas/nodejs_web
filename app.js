//const { crearArchivo } = require('./controllers/multiplicar')
import { crearArchivo } from "./controllers/multiplicar.js"
import { argv } from "./config/yargs.js";
import colors from "colors";

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado con exito...!!!!!') )
    .catch(err => console.log(err));
