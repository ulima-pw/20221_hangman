const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "AL QUE MADRUGA DIOS LE AYUDA",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE"
]

let refranSeleccionado = ""
let refranOcultado = ""

const seleccionarRefran = function() {
    // Seleccionar refran
    const indice = parseInt(Math.floor(
        Math.random() * refranes.length
    ))
    refranSeleccionado = refranes[indice]

    //Mostrar Refran
    //const divRefran = document.getElementById("divRefran")
    //divRefran.innerText = refranSeleccionado
}

const ocultarRefran = function() {
    refranOcultado = ""

    /*for (let i=0; i < refranSeleccionado.length, i++) {
    }*/

    for (let letra of refranSeleccionado) {
        if (letra == " ") {
            refranOcultado += letra
        } else {
            refranOcultado += "_"
        }
    }

    document.getElementById("divRefran").innerText = refranOcultado
}

const buscarDescubrirCaracter = function() {
    
}

const onKeyPressed = function(event) {
    const caracterSeleccionado = event.key

    buscarDescubrirCaracter(caracterSeleccionado)

} 

const main = function() {
    seleccionarRefran()
    ocultarRefran()
    window.addEventListener("keypress", onKeyPressed)
}

window.addEventListener("load", main)