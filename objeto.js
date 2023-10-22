export class Objeto{
    #nombre = null
    constructor(nombre){
        this.#nombre = nombre
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    caer(nombre){
        let caido = `<br/><span id="cursiva">#${nombre} se ha dado cuenta que su ${this.nombre} se ha caido. Lo volvió a coger#</span>`
        document.getElementById('divHistoria').innerHTML += caido
    }
}