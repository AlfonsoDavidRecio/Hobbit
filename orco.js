import {Elfo} from "./elfo.js";
import {razaOrco as raza} from "./clase_raza.js";

export class Orco extends Elfo{
    static jefeSupremo = "Sauron"
    constructor(nombre,clase = null){
        super(nombre,raza,clase)
    }
    rayoFilosofal(personaje){
        let filosofeando = `<br> <span id="cursiva"># ${this.nombre}, canalizó el poder de la piedra filosofal  en un rayo letal. El rayo, desgarrador y oscuro, impactó directamente en ${personaje.nombre}, el defensor de la Tierra Media, arrebatándole la vida.#</span> `
        document.getElementById('divHistoria').innerHTML += filosofeando
    }

    echarPeste(){
        let pestizida = `<br> <span id="cursiva"># ${this.nombre}, eufórico por la situación, abrió la boca y echando una horrible peste aturdió a Kili.#</span>`
        document.getElementById('divHistoria').innerHTML += pestizida
    }

    derrota(){
        let derrotado = `<br><strong>${this.nombre}: "Maldito seas ${Orco.jefeSupremo} no deberia haber acabado asi. Me mentistes…. AAAAHHHH."</strong>`
        document.getElementById('divHistoria').innerHTML += derrotado
    }
}