import { Hobbit } from "./hobbit.js";
import {razaHobbit as raza} from "./clase_raza.js";

export class HobbitCorrompido extends Hobbit{
    constructor(nombre,clase = null){
        super(nombre,raza,clase)
    }

    
    grito(texto){
        texto = texto.toUpperCase()
        let grito = `<br/><span id="cursiva">#${texto} QUE DOLOR. OTRA VEZ NO. QUIERO MI TESORO#</span>`
        document.getElementById('divHistoria').innerHTML += grito
    }
}