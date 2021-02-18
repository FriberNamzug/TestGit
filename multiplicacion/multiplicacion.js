const fs = require('fs')

let crearArchivo = (valorMulti, limite) => {

    return new Promise((resolve, reject) => {
        let tabla = ''
        for (let i = 1; i <= limite; i++) {
            tabla += `${valorMulti} X ${i} = ${valorMulti * i} \n`
        }
        if (!Number(valorMulti)) {
            reject('Inserta un numero valido!')
            return
        }
        if (!Number(limite)) {
            reject('Inserta un numero valido!')
            return
        }
        fs.writeFile(`tabla/tabla-${valorMulti}.txt`, tabla, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${valorMulti}.txt`)
            }
        })


    })
}


let listarTabla = (vase, limite) => {
    return new Promise((reject) => {

        if (!Number(vase)) {
            reject('Inserta un numero valido!')
            return
        }
        if (!Number(limite)) {
            reject('Inserta un limite valido!')
            return
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${vase} X ${i} = ${vase * i}`)
        }




    })

}

module.exports = {
    crearArchivo,
    listarTabla
}