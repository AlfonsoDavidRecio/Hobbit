import {Personaje} from './personaje.js'
import {claseMago, razaHobbit, razaHumano as raza} from "./clase_raza.js";
export class Humano extends Personaje{
    constructor(nombre,clase = null){
        super(nombre,raza,clase)
    }

    wingardiumLeviosa(){
        if(super.clase === claseMago){
            let leviosaaa = `<br> <span id="cursiva">#${this.nombre} conjura un misterioso hechizo: Wingardium Leviosa#</span> `
            document.getElementById('divHistoria').innerHTML += leviosaaa
        }
    }

    conjuroRayos(personaje){
        if(super.clase === claseMago){
            let rayos = `<br> <span id="cursiva"># ${this.nombre} conjura un ataque de Rayos que impacta en ${personaje.nombre}#</span> `
            document.getElementById('divHistoria').innerHTML += rayos
        }
    }
    conjuroHielo(personaje){
        if(super.clase === claseMago){
            let hielo = `<br> <span id="cursiva"># ${this.nombre} conjura un ataque de hielo que pareció hacer daño a ${personaje.nombre}#</span> `
            document.getElementById('divHistoria').innerHTML += hielo
        }
    }
    conjuroViento(){
        if(super.clase === claseMago){
            let viento = `<br> <span id="cursiva">#Un hechizo de viento lanzado por ${this.nombre} cortó a través de la vegetación, revelando el sendero oculto.#</span> `
            document.getElementById('divHistoria').innerHTML += viento
        }
    }

    atacar() {
        let ataque = `<br/><span id="cursiva">#${this.nombre} lanzó diferentes hechizos con su ${this.armaEquipada.nombre} sin mucho efecto.#</span>`
        document.getElementById('divHistoria').innerHTML += ataque
    }

    ataqueFinal(){
        let finalAtack = `<br/><span id="cursiva">#${this.nombre} disparó un potente rayo de luz.#</span>`
        document.getElementById('divHistoria').innerHTML += finalAtack
    }
}