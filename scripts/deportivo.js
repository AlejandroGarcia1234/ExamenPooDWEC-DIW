export class Deportivo extends Vehiculo{
    #potenciaMotor

    constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor){
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(value){
        this.#potenciaMotor = value;
    }
}