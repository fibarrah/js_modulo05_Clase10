
// PASO 6 - Continuacion
//'use strict'

// Clases - This Keywords

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    const circulo = function(){
        this.dibujo = function(){console.log('Dibujar');}
    }

    const objCirculo = new circulo();

    // Method Call
    //console.log(objCirculo.dibujo());

    const dibujo = objCirculo.dibujo;
    //console.log(dibujo);

    // Function CALL
    dibujo();


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




