class controller{
    constructor(){

        this.initialize();
    }

    initialize(){

        const display = document.querySelector('#display');
        const numeros = document.querySelector('[#id*=tecla]');
        const insert = (event) => display.textContent = event
        numeros.forEach (
            numero => numero.addEventListener('click',insert));

    }


}