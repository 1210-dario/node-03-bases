
const fs = require('fs');
const {logica} = require('./logica');

const multiplicar = (base,limite) => {
    
    console.log(`======== Tabla del ${base} ========`.green);

    const resultado = logica(base,limite);    
    console.log(resultado);
    fs.writeFileSync(`tablas/tabla-del-${base}.txt` , resultado);
}

module.exports = {
    multiplicar
};