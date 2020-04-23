//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El caracter que se introdujo ${base} no es un numero.`)
                return;
            }

            let data = '';

            for (let i = 1; i <= limite; i++) {

                data += `${ base } * ${ i } = ${ base * i }  \n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${base}.txt`);
            });

        }

    );
}
let listarTabla = (base, limite) => {


    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El caracter que se introdujo ${base} no es un numero.`)
            return;
        }

        if (!Number(limite)) {
            reject(`El caracter que se introdujo ${limite} no es un numero.`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }  \n`;
        }

        if (!data)
            reject('error al imprimir tabla de multipicar ');
        else {
            console.log('===================='.green);
            console.log(`==== tabla del ${base} ===`.bgGreen);
            console.log('===================='.green);
            resolve(data);
        }



    });
}

module.exports = {
    crearArchivo,
    listarTabla
}