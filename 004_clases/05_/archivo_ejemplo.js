
// Clases - Private Memebers using Symbols

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    class circulo{
        constructor(radio){
            this.radio = radio;
        }
    }

    // La propiedad es publica
    const obj = new circulo(1);
    obj.radio;

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    // Metodo Privado
    const _radio = Symbol();

    class circulo{
        constructor(radio){
            this[_radio] = radio;
        }
    }

    const obj = new circulo(1);
    //console.log(Object.getOwnPropertyNames(obj));

    //console.log(Object.getOwnPropertySymbols(obj));
    const key = Object.getOwnPropertySymbols(obj)[0];
    console.log(obj[key]);



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




