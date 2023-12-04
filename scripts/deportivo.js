import { Vehiculo } from "./vehiculo.js";

export class Deportivo extends Vehiculo{
    #potenciaMotor

    constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor){
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    //En este caso vemos como hereda los atributos de la clase Vehiculo con el super(), además de declarar el atributo privado #potenciaMotor solo para la clase deportivo

    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(value){
        this.#potenciaMotor = value;
    }
}