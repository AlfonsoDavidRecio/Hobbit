import {Personaje} from './personaje.js'
import {razaElfo as raza} from "./clase_raza.js";
export class Elfo extends Personaje{
    constructor(nombre,clase = null){
        super(nombre,raza,clase)
    }
    agonizar(texto,personaje){
        if(this.nombre === "LizardMan"){
            let agonizando = `<br> <span id="cursiva">#AAAAAAAAAHHHH COMO ME DUELE ${texto}# ${this.nombre} agonizó del dolor por culpa de la ${personaje.armaEquipada.nombre} de ${personaje.nombre} </span> `
            document.getElementById('divHistoria').innerHTML += agonizando
        }
    }
    grito(texto){
        texto = texto.toUpperCase() 
        if(this.nombre === "Legolas"){
            let agonizando = `<br> <span id="cursiva">#${texto}.El grito desgarrador de ${this.nombre} resonó por toda la zona.#</span> `
            document.getElementById('divHistoria').innerHTML += agonizando
        }
    }

    dispararFlecha(personaje,num){
        if(this.nombre === "Legolas"){
            if (num === 0){
                let flecha = `<br> <span id="cursiva">#${this.nombre} dispara flechas a ${personaje.nombre}. Falla todas las flechas #</span> `
                document.getElementById('divHistoria').innerHTML += flecha
            }else{
                let flecha = `<br> <span id="cursiva">#${this.nombre} dispara flechas a ${personaje.nombre}. Falla algunas flechas #</span> `
                document.getElementById('divHistoria').innerHTML += flecha
            }
        }
    }
}