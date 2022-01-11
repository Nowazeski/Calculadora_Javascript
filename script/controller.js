class controller{


    constructor(){
        this.initialize();
    }

    initialize(){

        var valor = "0";
        var numValor ="0";
        var novoNumero = true;
        var sinal;

        // Onload Inicia No carregamento da Pagina e inicia Referencias ao ID;

        onload = () =>{

            // Referencias aos BTN

            document.querySelector('#bt0').onclick = ()=> digito(0);
            document.querySelector('#bt1').onclick = ()=> digito(1);
            document.querySelector('#bt2').onclick = ()=> digito(2);
            document.querySelector('#bt3').onclick = ()=> digito(3);
            document.querySelector('#bt4').onclick = ()=> digito(4);
            document.querySelector('#bt5').onclick = ()=> digito(5);
            document.querySelector('#bt6').onclick = ()=> digito(6);
            document.querySelector('#bt7').onclick = ()=> digito(7);
            document.querySelector('#bt8').onclick = ()=> digito(8);
            document.querySelector('#bt9').onclick = ()=> digito(9);
            document.querySelector('#btPonto').onclick = ()=> ponto();

            // REFERENCIA AOS BT LIMPAR E APAGAR

            document.querySelector('#btLimpar').onclick = () => limpar();
            document.querySelector('#btApagar').onclick = () => apagar();

            // REFERENCIA AOS OPERADORES ARITMÉTICOS

            document.querySelector("#btMais").onclick = () => mais();
            document.querySelector('#btMenos').onclick = () => menos();
            document.querySelector('#btDividir').onclick = () => dividir();
            document.querySelector('#btVezes').onclick = () => vezes();

            document.querySelector('#btIgual').onclick = () => igual();

            atualizaDisplay();

        };

        const ponto = () =>{
          
            if(novoNumero){
                valor = '0,';
                novoNumero = false;
            } else if (valor.indexOf(',') == -1) valor += ',';
            atualizaDisplay();
            
        };

        // Insere Os Numeros No display;

        const digito = (n) =>{

            if(novoNumero){
                valor = "" + n;
                novoNumero = false;
                atualizaDisplay();
            }else{

                valor += n;
                atualizaDisplay();
            }
        };

        // Atualizar O Display;

        const atualizaDisplay = ()=>{

            document.querySelector('#display').innerText = valor;
        };

        const limpar = () => {

            valor = "0";
            atualizaDisplay();
            valor = "";

        };

        const apagar = () => {

            if(valor > 0){

                valor = valor.substring(0,valor.length-1);
                atualizaDisplay();
                
            }else{
                valor = "0";
                atualizaDisplay();
                valor = "";
            }
        };

        // Operadores Aritméticos

        const mais = () =>{
            sinal = 'mais';
            numValor = valor;
            valor = "0";
            atualizaDisplay();
            valor = "";
        };
        const menos = () =>{
            sinal = 'menos';
            numValor = valor;
            valor = "0";
            atualizaDisplay();
            valor = "";
           
        };
        const vezes = () =>{
            sinal = 'vezes';
            numValor = valor;
            valor = "0";
            atualizaDisplay();
            valor = "";
           
        };

        const dividir = () =>{
            sinal = 'dividir';
            numValor = valor;
            valor = "0";
            atualizaDisplay();
            valor = "";
          
        };

        const igual = () =>{

            // IF PARA TRATAMENTO DE ERRO NOT A NUMBER(NaN).
  
            if(valor == ""){
                valor = "ERROR";
                atualizaDisplay();
                valor = "";

                }else{

                // LÓGICA DOS OPERADORES ARITMÉTICOS + - * /

                    switch (sinal){
                        
                        
                        case 'mais':
                            var operacao = parseInt(numValor) + parseInt(valor); 
                            valor = operacao;
                            atualizaDisplay();
                            break;
                            
                        case 'menos':
                            var operacao =  parseInt(numValor) - parseInt(valor);
                            valor = operacao;
                            atualizaDisplay();
                            break;
                                
                        case 'dividir':
                            var operacao = parseInt(numValor) / parseInt(valor); 
                            valor = operacao;
                            atualizaDisplay();
                            break;

                        case 'vezes':
                            var operacao = parseInt(valor) * parseInt(numValor);
                            valor = operacao;
                            atualizaDisplay();
                            break;
                                    
                        default:
                            valor = "0";
                            atualizaDisplay();
                            valor = "";
                    }          
                }
        };
    }
}