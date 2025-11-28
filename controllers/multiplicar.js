//const fs = require('node:fs');
// import { writeFile } from 'node:fs';
import fs from 'node:fs';
import colors from "colors";

 // Este codigo es usando un Async
const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${'*'.green} ${index} ${'='.green} ${ base * index} \n`;
            salida += `${ base } * ${ index } = ${ base * index } \n`;
        }

        if ( listar ) {
            console.info('*****************************'.green);
            console.info(`       Tabla del : ${base}`.blue);
            console.info('*****************************'.green);
            console.log(consola)
        }
        
        fs.writeFileSync( `./salida_file/tabla-${base}.txt`, salida );
        
        return `tabla-${base}.txt`   
    } catch (err) {
        throw err;
    }
}

export { crearArchivo }

/* module.exports = {
    crearArchivo
} */










/* // Este codigo es usando un NEW PROMISE
const crearArchivo = ( base = 5 ) => {

    return new Promise ( (resolve, reject) => {
        console.info('*****************************');
        console.info(`       Tabla del : ${base}`);
        console.info('*****************************');

        let salida = '';

        for (let index = 1; index <= 10; index++) {
            salida += `${base} * ${index} = ${ base * index} \n`;
        }
        
        console.log(salida)
        
        fs.writeFileSync( `tabla-${base}.txt`, salida );
        
        resolve(`tabla-${base}.txt`)
        //console.log(`tabla-${base}.txt Creado con Exito!!!`)
        
        // Este codigo requiere el requiere fs importando la contante
        fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt Creado con Exito!!!`)
        })
        
        
        /* //Este codigo solo necesita el import
        writeFile( 'tabla-5.txt', salida, (err) => {
            if (err) throw err;
            console.log('tabla-5.txt creado')
        })
        
    })
}

module.exports = {
    crearArchivo
}

*/