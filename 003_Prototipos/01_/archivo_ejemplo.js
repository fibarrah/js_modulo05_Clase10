'use strict'

console.clear();

// Prototipos

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // Herencia

    // Crear un Objeto
    let x = {};
    //console.log(x);
    //console.log(x.toString());

    let y = {};

    //console.log(Object.getPrototypeOf(x));

    console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    // Herencia Multinivel
    let miMatriz = [];
    //console.log(miMatriz);

    function Circulo(radio){
        this.radio = radio;
        this.dibujar = function(){
            console.log('Dibujar');
        }
    }

    const circulo = new  Circulo(10);

    console.log(circulo);

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    // Descriptores
    let persona = {nombre: 'Fernando'};
    //console.log(persona);
    // Vemos una de las propiedades 
    //console.log(persona.toString());
    //for(let key in persona)
        //console.log(key);
    
    // Interactuar con el objectBase
    //console.log(Object.keys(persona));

    // Obtener las propiedades
    let objectBase = Object.getPrototypeOf(persona);
    let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
    console.log(descriptor);

    // Editar propiedades
    Object.defineProperty(persona, 'nombre', {

        writable: true,
        enumerable: true,

    });

    // Vamos a editar 
    //persona.nombre = 'John';
    //console.log(persona);

    // Enumerar
    console.log(Object.keys(persona));


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




