'use strict'

console.clear();

// Clases

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // Function Constructor
    function circulo(radio){
        this.radio = radio;
        this.dibujo = function(){
            console.log('dibujar');
        }
    }

    // CLASE
    class claseCirculo {
        constructor(radio){
            this.radio = radio;
            this.mover = function(){

            }
        }

        // Crear un metodo
        dibujar(){
            console.log("Dibujar");
        }
    }

    // Crear un objeto
    const obj = new claseCirculo(1);
    //console.log(obj);

    console.log(typeof(circulo));
    console.log(typeof(claseCirculo));

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{


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




