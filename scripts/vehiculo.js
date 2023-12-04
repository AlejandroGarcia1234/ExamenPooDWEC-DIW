import { mostrarResultado } from "./main.js"

export class Vehiculo{
    #marca  
    #modelo
    #color
    #fabricacion
    #cilindrada

    // La # nos indica que estos atributos son privados

    constructor(marca, modelo, color, fabricacion, cilindrada){
        this.#marca = marca,
        this.#modelo = modelo,
        this.#color = color,
        this.#fabricacion = fabricacion,
        this.#cilindrada = cilindrada
    }

    mostrarDatos(){
        const datos = `La marca del vehículo es: ${this.#marca}
        <br/> El modelo del vehículo es: ${this.#modelo}
        <br/> El color del vehículo es: ${this.#color}
        <br/> El año de fabricación del vehículo es: ${this.#fabricacion}
        <br/> La cilindrada del vehículo es: ${this.#cilindrada}
        `

        mostrarResultado(`<p>${datos}</p>`)
    }

    //Para el método acelerar, vemos que le pasamos el atributo velocidad, el cual tendremos que darle luego en el main cuando llamemos al método.
    acelerar(velocidad){
        const mensaje = `Se ha alcanzado una velocidad de: ${velocidad}`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    arrancar(){
        const mensaje = `El vehículo ${this.#marca} ha arrancado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    frenar(){
        const mensaje = `El vehículo ${this.#marca} ha frenado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    get marca(){
        return this.#marca;
    }

    set marca(value){
        this.#marca = value;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(modelo){
        this.#modelo = modelo;
    }

    get color(){
        return this.#color;
    }

    set color(color){
        this.#color = color;
    }

    get fabricacion(){
        return this.#fabricacion;
    }

    set fabricacion(fabricacion){
        this.#fabricacion = fabricacion;
    }

    get cilindrada(){
        return this.#cilindrada;
    }

    set cilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }
}