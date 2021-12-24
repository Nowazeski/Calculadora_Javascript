class controller {
    constructor() {

        this.initialize();
    }

    initialize() {

        var btIgualEl = document.querySelector('#btIgual');
        btIgualEl.addEventListener('click', igual);

        // Operadores Aritméticos

        var btMaisEl = document.querySelector('#btMais');
        btMaisEl.addEventListener('click', insertMais);

        var btMenosEl = document.querySelector('#btMenos');
        btMenosEl.addEventListener('click', insertMenos);

        var btDividirEl = document.querySelector('#btDividir');
        btDividirEl.addEventListener('click', insertDividir);

        var btVezesEl = document.querySelector('#btVezes');
        btVezesEl.addEventListener('click', insertVezes);

        // Botão Apagar Ponto e Limpar

        var btLimparEl = document.querySelector("#btLimpar");
        btLimparEl.addEventListener('click', limpar);

        var btApagarEl = document.querySelector("#btApagar");
        btApagarEl.addEventListener('click', apagar);

        var btPontoEl = document.querySelector("#btPonto");
        btPontoEl.addEventListener('click', insertPonto);

        var valor1;
        var valor2;
        var sinal;

        // Teclas Numéricas

        var numeroEl = document.querySelector('#tecla-0');
        numeroEl.addEventListener('click', insert);
        var numeroEl1 = document.querySelector('#tecla-1');
        numeroEl1.addEventListener('click', insert1);
        var numeroEl2 = document.querySelector('#tecla-2');
        numeroEl2.addEventListener('click', insert2);
        var numeroEl3 = document.querySelector('#tecla-3');
        numeroEl3.addEventListener('click', insert3);
        var numeroEl4 = document.querySelector('#tecla-4');
        numeroEl4.addEventListener('click', insert4);
        var numeroEl5 = document.querySelector('#tecla-5');
        numeroEl5.addEventListener('click', insert5);
        var numeroEl6 = document.querySelector('#tecla-6');
        numeroEl6.addEventListener('click', insert6);
        var numeroEl7 = document.querySelector('#tecla-7');
        numeroEl7.addEventListener('click', insert7);
        var numeroEl8 = document.querySelector('#tecla-8');
        numeroEl8.addEventListener('click', insert8);
        var numeroEl9 = document.querySelector('#tecla-9');
        numeroEl9.addEventListener('click', insert9);




        // FUNCTION IGUAL

        function igual() {

            var displayEl = document.querySelector('#display');



            displayEl.textContent = "";
        }

        // FUNCTION DO LIMPAR, APAGAR E PONTO

        function limpar() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = "";

        }

        function apagar() {
            var displayEl = document.querySelector("#display").innerHTML;
            document.querySelector('#display').innerHTML = displayEl.substring(0, displayEl.length - 1);

        }

        function insertPonto() {
            var displayEl = document.querySelector('#display');
            displayEl.textContent = displayEl.textContent + ".";

        }

        // FUNCTION OPERADORES ARITMÉTICOS  

        function insertMais() {

            var displayEl = document.querySelector('#display');
            displayEl.textContent = displayEl.textContent + "+";

        }
        function insertMenos() {

            var displayEl = document.querySelector('#display');
            displayEl.textContent = displayEl.textContent + "-";

        }
        function insertDividir() {

            var displayEl = document.querySelector('#display');
            displayEl.textContent = displayEl.textContent + "/";

        }
        function insertVezes() {

            var displayEl = document.querySelector('#display');
            displayEl.textContent = displayEl.textContent + "*";

        }

        // FUNCTION DOS NUMEROS

        function insert() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "0";
        }
        function insert1() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "1";
        }
        function insert2() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "2";
        }
        function insert3() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "3";
        }
        function insert4() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "4";
        }
        function insert5() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "5";
        }
        function insert6() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "6";
        }
        function insert7() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "7";
        }
        function insert8() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "8";
        }
        function insert9() {
            var displayEl = document.querySelector("#display");
            displayEl.textContent = displayEl.textContent + "9";
        }


    }

}