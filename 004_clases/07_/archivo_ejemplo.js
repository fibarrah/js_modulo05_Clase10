
// Clases - GET AND SETS

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // PASO 1
    const _radio = new WeakMap();

    class circulo{
        constructor(radio){
            _radio.set(this, radio);
        }

        // GETTER - 
        get getRadio(){
            return _radio.get(this);
        }

        set setRadio(nuevoValor){
            if(nuevoValor <= 0) throw new Error('Valor Invalido');
                _radio.set(this,nuevoValor);
        }
    }

    const obj = new circulo(1);

    // ObtieneDatos
    console.log(obj.getRadio);
    // Pone Datos
    obj.setRadio = 10;
    console.log(obj.getRadio);
    // Que devuelva el error
    obj.setRadio = -1;
    console.log(obj.getRadio);

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




