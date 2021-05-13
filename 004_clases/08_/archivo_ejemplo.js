
// Clases - Inheritance

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // PASO 1
    class Forma{
        mover() {
            console.log('Funcion Mover');
        }
    }

    class circulo extends Forma {

        dibujar() {
            console.log('Funcion Dibujar');
        }
    }

    const obj = new circulo();
    obj.mover();
    obj.dibujar();
    

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    // PASO 2
    class Forma{
        //PASO 3 - Si ponemos un constructor
        constructor(color,forma){
            this.color = color;
            this.forma = forma;
        }

        mover() {
            console.log('Funcion Mover');
        }
    }
    
    class circulo extends Forma {
        // PASO 3 -Continuacion
        // Si ponemos un constructor igual aca
        // Nos marca error
        constructor(color, forma, radio){
            // Hay que poner
            super(color, forma);
            this.radio = radio;
        }

        dibujar() {
            console.log('Funcion Dibujar');
        }
    }
    
    const obj = new circulo('red', 7);

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




