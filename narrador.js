
export class Narrador{
    #nombre = null
    constructor() {
        this.#nombre = "Narrador"
    }
    //Usado en el incicio. No tiene el Primer br por lo que al empezar la narracion de la obra no tiene un salto de linea
    inicio(texto){
        let narracion = `<strong>-- ${texto} --</strong><br/>`
        document.getElementById('divHistoria').innerHTML += narracion
    }
    narrar(texto){
        let narracion = `<p><strong>-- ${texto} --</strong></p>`
        document.getElementById('divHistoria').innerHTML += narracion
    }
    tituloEscena(texto){
        let titulo = `<p style="text-align:center; text-decoration: underline; color: orangered;"><strong> ${texto} </strong></p>`
        document.getElementById('divHistoria').innerHTML += titulo
    }
    final(texto){
        let narracion = `<p><strong>** ${texto} **</strong></p>`
        document.getElementById('divHistoria').innerHTML += narracion
    }
}