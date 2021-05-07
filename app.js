// INTRODUÇÃO (PARTE 01)

console.log('Hey Rafael');

/************************************************************************************************************************/

//VARIÁVEIS E TIPOS DE DADOS (PARTE 02)

var nome = 'Rafael'; //STRING

var numero = 100; //NÚMERICA

var b = false; //boolean

//CONSTANTES = NÃO PERMITEM QUE VOCÊ TROQUE O VALOR;   

const valor = 100;

// valor = 50; ISSO IRÁ GERAR UM ERRO

//LET = SÃO VARIÁVEIS QUE PERMITEM QUE VOCÊ ALTERE O VALOR CONTIDO NELAS

let troca = 100;

troca = 50; //NÃO IRÁ GERAR NENHUM ERRO

/***********************************************************************************************************************/

//FUNÇÕES E PARÂMETROS (PARTE 03)

//EXISTEM TRÊS FORMAS DE SE ESCREVER UMA FUNÇÃO:

//PRIMEIRA:

function somar(num1, num2){

    console.log(num1+num2);

}

somar(10, 25);

//SEGUNDA:

var toUpper = function(name){

    const upper = name.toUpperCase();

    console.log(upper);
}

var sobrenome = 'Ferreira';

toUpper(sobrenome);

//TERCEIRA:

var toLower = (name) => {

const lower = name.toLowerCase();

console.log(lower);

}

var ultimoNome = 'VAZ';

toLower(ultimoNome);

//CONCATENAÇÃO DE STRINGS (PARTE04)

var name = 'Rafael';

var idade = 26;

//EXEMPLO 01:

console.log('Oi! o meu nome é '+name+ ' e minha idade é '+idade);

//EXEMPLO 02: 

console.log("Oi! o meu nome é "+name+" e minha idade é "+idade);

//EXEMPLO 03 (STRING INTERPOLATION):

console.log(`Hi! it's ${name} and my age is ${idade}`);

/************************************************************************************************************************/

//IF AND ELSE 

var number1 = 6;

var number2 = 8;

if(number1 === number2){
    
    console.log(`Os números são iguais`);
    
}

else if (number1 > number2){

    console.log(`O primeiro número é maior que o segundo`);

}

else if(number1 < number2){

    console.log(`O segundo número é maior que o primeiro`);
}

/************************************************************************************************************************/

//ARRAYS 

const nomes = ['Rafael', 'João', 'Maria', 'Pedro', 'Roberto'];

console.log(nomes[0]); //IMPRIME O VALOR DA PRIMEIRA POSIÇÃO

nomes.push('Joaquim'); //ADICIONA UM VALOR NA ÚLTIMA POSIÇÃO

console.log(nomes[5]);

nomes.pop(); //REMOVE O VALOR DA ÚLTIMA POSIÇÃO;

nomes.shift(); //REMOVE O VALOR DA PRIMEIRA POSIÇÃO

console.log(nomes[0]);

nomes.unshift('Ricardo'); //ADICIONA UM VALOR NA PRIMEIRA POSIÇÃO

console.log(nomes[0]);

var index = nomes.indexOf('João'); //RETORNA O ÍNDICE DO VALOR DESCRITO

console.log(nomes[index]);

/**********************************************************************************************************************/

//OBJETOS E A PALAVRA CHAVE 'THIS'

const user = {
    name: 'Rafael', 
    phone: 4857412548,
    address: 'Rua São Nicolau, nº 28',
    married: false,

    sayMyName: function(){
        console.log(this.name);
    }

};

console.log(this); //IRÁ RETORNAR O OBJETO WINDOW DO JAVASCRIPT

console.log(user); //IRÁ RETORNAR O OBJETO USER

console.log(user.address);

user.sayMyName();

/************************************************************************************************************************** */

//ESTRUTURAS DE REPETIÇÃO 'FOR' E 'WHILE'

const names = ['Rafael', 'João', 'Pedro', 'José', 'Maria'];

for(name of names){

    console.log(`Olá! o seu nome é: ${name}`);
}

for(name of names){
     
    if(name === 'Pedro');
    console.log(`Olá Pedro!`);
    break; //IRÁ PAUSAR O LOOP QUANDO A CONDIÇÃO FOR ATENDIDA
}

let cont = 0;


while(cont < 100){

    console.log('O contador ainda é menor que 100');

    cont ++;
}












