'use strict'

console.clear();

// Clases - Metodos Estaticos

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    class circulo {
        constructor(radio){
            this.radio = radio;
        }   

        // Intance Method
        dibujar(){

        }

        // Static Method
        static parse(str){
            const radio = JSON.parse(str).radio;
            return new circulo(radio);
        }
    }

    const objCirculo = new circulo(1);
    // Accesar a Metodo Estatico
    //circulo.parse('');
    //console.log(objCirculo);

    const estaticCirculo = circulo.parse('{"radio": 1}');
    console.log(estaticCirculo);


})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{
    // Methodo
    Math.abs();

    // Si no existiera
    class Math2 {
        static abs(valor){
            // ... Valores 
        }
    }

    Math2.abs(-1);

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

})

var btn_ejemplo5 = document.querySelector("#btn_ejemplo5");
btn_ejemplo5.addEventListener('click', () =>{

})

var btn_ejemplo6 = document.querySelector("#btn_ejemplo6");
btn_ejemplo6.addEventListener('click', () =>{

})

// FUNCIONES




