


//Incrementa
//O query selector all retorna uma lista com todos os elementos que compartilham a classe buscada
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");
console.log(botoesIncrementa); // permite verificiar no console a lista de botoes

//Como estamos trabalhando agora como uma lista de botoes, é necessário que para
//cada item dentro dessa lista (cada botao) adicionemos um Event Listener
//Para esta Iteração recoremos ao uso de FOR.
for (let botao of botoesIncrementa)   //Usamos o let e nao o var pois o var SOBRESCREVE outras variaveis com mesmo nome independente do contexto.
{
    //adiciona o eventlistener click, que aciona a function incrementa
    botao.addEventListener('click',incrementa);

    function incrementa()
    {            
        //criação do item, usando o botão mais proximo de item
        var item = botao.closest('.item');

        //criação de input que recebe o conteudo do elemento cujo a classe é quantidade
        var input = item.querySelector('.quantidade');
        //incrementa o value do input
        input.value++;
        //criação da variavel preco carregada com retorno da função pegaPrecoItem
        var preco = pegaPrecoItem(item);
        //Função adiciona ao total tem coo parametro a variavel preco
        adicionaAoTotal(preco);

    }

}

//Decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");
console.log(botoesDecrementa);



for( let botao of botoesDecrementa)
{
    botao.addEventListener('click',decrementa);


    function decrementa()
    {
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');
        
        if(input.value > 0)
        {
            input.value--;
        
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco);

        }

}

}

//Com o código abaixo, implementamos uma validação no envio do formulario
//atribuindo a variavel o form pedido
var formPedido = document.forms.pedido;
//adicionado um ouvidor de evento, ouvindo o evento submit (envio do form)
//como sabemos um evento precisa de dois parametros sendo que o segundo é a ação a ser realizada
//no caso , como iremos usar a função apenas uma vez, lançamos mao do recurso de função anonima
formPedido.addEventListener('submit', function (event){ 
    
    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    //a iteração abaixo verifica se os inputs da lista, possuem valor maior que 0
    for(let input of inputs)
    {
        if(input.value > 0)
        {
            contador++;
        }
        
    }

    if (contador == 0)
    {
        //Exibe um alerta no navegador
        alert("Deve ter pelo menos 1 pizza selecionada");
        
        //O comando abaixo impede o comportamento padrão do elemento, no caso de um form
        //seu comportamento padrão é submit, logo, este será prevenido caso a verificação seja
        //verdadeira
       event.preventDefault();

    }

});



//Funções auxiliares
function pegaPrecoItem(item)
{
    //instanciado variavel precoItem, seu valor é o retorno do QuerySelector, o value do elemento que tem como classe: preco item
    var precoItem = item.querySelector('.preco-item');
    // retorno da funçao, casting para Number
    return Number(precoItem.textContent);    

}

function adicionaAoTotal(valor)
{
    //Instanciado variavel cujo conteudo é o retorno da Query, este é o value do elemento cujo ID é total
    var elementoTotal = document.querySelector('#total');
    //O conteudo do elemento Total tem seu valor acrescentado ao parametro da função, ou seja, o valor a ser acrescentado ao total.
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}



