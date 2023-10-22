import {Personaje} from './personaje.js'
import {razaHobbit as raza} from "./clase_raza.js";
export class Hobbit extends Personaje{
    static padreBilbo = "Bungo Bolsón"
    constructor(nombre,clase = null){
        super(nombre,raza,clase)
    }
    fumar(objeto){
        let fumar = `<br/><span id="cursiva"># ${this.nombre} se pone a fumar un poco de ${objeto.nombre}. Empezó a oler a humo. #</span>`
        document.getElementById('divHistoria').innerHTML += fumar
    }

    grito(texto){
        texto = texto.toUpperCase()
        let grito = `<br/><span id="cursiva">#${texto} QUE DOLOR. Que ${Hobbit.padreBilbo} me de fuerzas.#</span>`
        document.getElementById('divHistoria').innerHTML += grito
    }
}