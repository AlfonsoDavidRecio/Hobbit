import {Personaje} from './personaje.js'
import {razaEnano as raza} from "./clase_raza.js";
export class Enano extends Personaje{
    static rey = 'Thorin Escudo de Roble'
    static dios = 'Aulë '

    static celebrar(){
        let celebración = `<br> <span id="cursiva">#¡Que locura! Somos bendecidos por ${Enano.rey} y nuestro dios ${Enano.dios}. Alabados seais.#</span> `
        document.getElementById('divHistoria').innerHTML += celebración
    }

    #colorBarba
    constructor(nombre,clase = null, colorBarba = 'Blanca'){
        super(nombre,raza,clase)
        this.#colorBarba = colorBarba
    }
    reanimar(personaje){
        if (this.nombre==="Fili"){
            let reanimacion = `<br> <span id="cursiva">#${this.nombre} intenta reanimar a ${personaje.nombre}#</span> `
            document.getElementById('divHistoria').innerHTML += reanimacion
        }
    }
}