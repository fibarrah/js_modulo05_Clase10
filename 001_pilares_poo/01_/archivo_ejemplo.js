'use strict'

console.clear();

// ENCAPSULACION

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    let salarioBase = 30_000;
    let tiempoExtra = 10;
    let salarioDiario = 20;

    function getSalario(salarioBase,tiempoExtra,salarioDiario){
        return salarioBase + (tiempoExtra*salarioDiario);
    }

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    let empleado = {
        salarioBase = 30_000,
        tiempoExtra = 10,
        salarioDiario = 20,

        getSalario: function() {
            return this.salarioBase + (this.tiempoExtra*this.salarioDiario);
        }
    }

    empleado.getSalario();

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

})

// FUNCIONES




