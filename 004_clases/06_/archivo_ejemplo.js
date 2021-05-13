
// Clases - Private Memebers using WeakMaps

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // PASO 1
    const _radio = new WeakMap();
    // PASO 4 - Ahora un metodo
    const _mover = new WeakMap();

    class circulo {
        constructor(radio){
            //this.radio = radio;
            // PASO 2
            _radio.set(this, radio);

            // PASO 4 - Continuacion
            _mover.set(this, () => {
                console.log('mover', this);
            });
        }

        // PASO 3 - Para leer la propiedad
        dibujar(){
            console.log(_radio.get(this));
        }
        // PASO 4 - Continuacion
        ver_metodoPrivado(){
            _mover.get(this)();
            console.log('Ver Metodo Privado');
        }
    }

    // PASO 1 -Continuacion
    const obj = new circulo(1);

    // PASO 2 - Continuacion
    console.log(obj);

    // PASO 3 Continuacion
    console.log(obj.dibujar());

    // PASO 4 - Continuacion
    console.log(obj.ver_metodoPrivado());

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




