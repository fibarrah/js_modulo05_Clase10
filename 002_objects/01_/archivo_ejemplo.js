'use strict'

console.clear();

// Objetos

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{
 
    // Literales
    const circulo = {
        radio: 1,
        posicion: {
            x: 1,
            y: 1
        },
        dibujar: function() {
            console.log('Dibujar');
        }
    };

    circulo.radio;
    circulo.dibujar();

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    // Funcion de Fabrica (Factories)
    function crearCirculo(radio){
        return {
            radio,
            dibujar: function(){
                console.log("Dibujar Circulo");
            }
        };
    }

    const circulo = crearCirculo(1);


})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    // Constructor Function
    function Circulo(radio){
        this.radio = radio,
        this.dibujar = function(){
            console.log('Dibujar');
        }
    }

    const otroCirculo = new Circulo(1);

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

    // Constructor Property
    function crearCirculo(radio){
        return {
            radio,
            dibujar: function(){
                console.log('Dibujar');
            }
        };
    }

    function Circulo(radio){
        this.radio = radio;
        this.dibujar = function(){
            console.log("Dibujar");
        }
    }

    const otroCirculo = new Circulo(1);
    const circulo = crearCirculo(1);

    console.log(otroCirculo.constructor);
    console.log(circulo.constructor);

    // Otros Constructores
    let numero = 1;
    // new Number() = 
    // new String() = "", ''
    // new Boolean = true, false

})

var btn_ejemplo5 = document.querySelector("#btn_ejemplo5");
btn_ejemplo5.addEventListener('click', () =>{

    // Constructor Function
    function Circulo(radio){
        this.radio = radio;
        this.dibujar = function(){
            console.log("Dibujar");
        }
    }

    const circulo = new Circulo(10);

    // Agregar Propiedad
    circulo.posicion = {x: 1};

    const nombrePropiedad = 'centrar_dibujo';
    circulo[nombrePropiedad] = {y: 1};

    delete circulo['centrar_dibujo'];

})

var btn_ejemplo6 = document.querySelector("#btn_ejemplo6");
btn_ejemplo6.addEventListener('click', () =>{

    // Enumerar estas propiedades
    function Circulo(radio){
        this.radio = radio;
        this.dibujar = function(){
            console.log("Dibujar");
        }
    }

    const circulo = new Circulo(10);

    // Primer Ejemplo
    for(let key in circulo){
        console.log(key, circulo[key]);
    }

    // Segundo Ejemplo
    const keys = Object.keys(circulo);
    console.log(keys);

    // Tercer Ejemplo
    if('Circunferencia' in circulo)
        console.log("Si hay una propiedad RADIO");

})

// FUNCIONES




