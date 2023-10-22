import {Objeto} from './objeto.js'
export class Bebida extends Objeto{
    constructor(nombre){
        super(nombre)
    }

    beber(nombrePersonanje){
        let beber = `<br/><span id="cursiva"># ${nombrePersonanje} bebió un poco de ${this.nombre} #</span>`
        document.getElementById('divHistoria').innerHTML += beber
    }
}