//La primera letra de la clase con mayuscula
import {Bebida} from "./bebida.js";
import {Objeto} from './objeto.js'
import {Arma} from "./arma.js";
export class Personaje{
    #nombre = null
    #raza = null
    #clase = null
    #inventario = null
    #armaEquipada = null
    static dios = "Ilúvatar"
    constructor(nombre,raza,clase = null){
        this.#nombre = nombre
        this.#raza = raza
        this.#clase = clase
        this.#inventario = new Set()
        this._nombre = nombre;
        this._raza = raza;
    }
    get nombre() {
        return this._nombre;
    }

    get armaEquipada() {
        return this.#armaEquipada;
    }
    
    get clase() {
        return this.#clase;
    }

    get raza() {
        return this._raza;
    }

    static llorar(personaje){
        let llanto = `<br> <span id="cursiva"># Se escucha el llanto de ${personaje.nombre}. Con solo escucharlo se nota lo dolido que está. ${personaje.nombre} siente que ${Personaje.dios} le ha abandonado.#</span> `
        document.getElementById('divHistoria').innerHTML += llanto
    }
    static sorprender(personaje,texto){
        let sorpresa = `<br> <span id="cursiva"># ${personaje.nombre} se sorprendió por que vió ${texto}#</span> `
        document.getElementById('divHistoria').innerHTML += sorpresa
    }
    reir(){
        let risa = `<br> <span id="cursiva">#${this.nombre} se rie a carcajada limpia.#</span> `
        document.getElementById('divHistoria').innerHTML += risa
    }
    hablar(texto){
        let textoMejorado = `<br/> ${this.#nombre}: "${texto}"`
        document.getElementById('divHistoria').innerHTML += textoMejorado
    }

    coger(objeto){
        this.#inventario.add(objeto)
        if ((objeto instanceof Arma)){
            this.#armaEquipada = objeto //Si el objeto es un arma el objeto es el arma que tiene equipada
        }

        let cogerObjeto = `<br> <span id="cursiva">#${this.nombre} cogió ${objeto.nombre}#</span> `
        document.getElementById('divHistoria').innerHTML += cogerObjeto

        if ((objeto instanceof Arma) && objeto.nombre === "Bomba"){
            objeto.explotar()
            this.#inventario.delete(objeto)
        }
        if(objeto.nombre === "VaritaSauco"){
            this.#inventario.delete("Varita")
        }
    }
    pasar(objeto,personaje){
        if(!(objeto instanceof Objeto))
        throw 'Objeto invalido'
        if(!(personaje instanceof Personaje))
            throw 'Personaje invalido'
        this.#inventario.delete(objeto)

        let pasarObjeto = `<br> <span id="cursiva">#${this.nombre} le pasó ${objeto.nombre} a ${personaje.nombre}#</span> `
        document.getElementById('divHistoria').innerHTML += pasarObjeto

        personaje.coger(objeto)        
    }

    beber(bebida){
        if (this.#inventario.has(bebida) && bebida  instanceof Bebida){
            bebida.beber(this.#nombre)
            this.#inventario.delete(bebida)
        }
    }

    //Este metodo va a ser sobreesquito en diferentes subclases.
    grito(texto){
        texto = texto.toUpperCase()
        let grito = `<br/><span id="cursiva">#${texto} QUE DOLOR.#</span>`
        document.getElementById('divHistoria').innerHTML += grito
    }
    atacar(){
        if (this.#inventario.has(this.#armaEquipada)){
            this.#armaEquipada.atacarConArma(this)
        }
    }

}
