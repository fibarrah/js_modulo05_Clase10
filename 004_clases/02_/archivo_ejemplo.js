'use strict'

console.clear();

// Clases - Hoisting

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    //decirHola();

    // Function Declaration - Tiene Hoisting
    function decirHola() {}

    decirAdios();

    // Function Expression - No Hoisting
    const decirAdios = function(){};

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    

    class circulo{

    }

    const obj = new circulo();

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




