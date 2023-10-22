import {Objeto} from "./objeto.js";
import {razaHobbit} from "./clase_raza.js";
export class Arma extends Objeto{
    constructor(nombre){
        super(nombre)
    }
    explotar(){
        if (this.nombre === "Bomba"){
            let bomba = `<br> <span id="cursiva"># Las bombas son peligrosas...#</span> `
            document.getElementById('divHistoria').innerHTML += bomba
        }
    }

    atacarConArma(personaje){
        if (personaje.raza ===razaHobbit){
            let ataque = `<br/><span id="cursiva">#${personaje.nombre} golpeo con ${personaje.armaEquipada.nombre} por la espalda.#</span>`
            document.getElementById('divHistoria').innerHTML += ataque
        }else{
            let ataque = `<br/> <span id="cursiva">#${personaje.nombre} golpeo con ${personaje.armaEquipada.nombre}.#</span>`
            document.getElementById('divHistoria').innerHTML += ataque
        }
    }
}