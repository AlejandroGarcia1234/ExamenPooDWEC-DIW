// GitHub: 

import { Vehiculo } from "./vehiculo.js";
import { Deportivo } from "./deportivo.js";

const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`
}

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('--Vehiculo BMW--');
vehiculo1.mostrarDatos();
vehiculo1.acelerar(140);
vehiculo1.arrancar();
vehiculo1.frenar();

const vehiculo1Object = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}

localStorage.setItem("vehiculo", JSON.stringify(vehiculo1Object));

console.log(JSON.parse(localStorage.getItem("vehiculo")));

console.log(localStorage.getItem("vehiculo"));

const deportivo1 = new Deportivo('Ferrari', 'Spider', 'amarillo', 2020, '4000', 500);
mostrarResultado('<br/>--Deportivo Ferrari--');
deportivo1.mostrarDatos();
mostrarResultado("Potencia de motor: " + deportivo1.potenciaMotor) //Vemos que para que se muestre el valor hay que llamar al atributo que declaramos en la clase deportivo (potenciaMotor)
deportivo1.acelerar(140);
deportivo1.arrancar();
deportivo1.frenar();

const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    fabricacion: deportivo1.fabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor
}

for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key])
    }
}

localStorage.removeItem('modelo');

localStorage.removeItem('color');

localStorage.clear();

