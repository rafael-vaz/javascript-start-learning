//DOM MANIPULATION


const changeButton = document.querySelector('.change-button'); //ARMAZENA O ELEMENTO HTML EM UMA CONSTANTE ATRAVÉS DO SEU NOME OU NOME DA CLASSE
const title = document.querySelector('.title-style'); //ARMAZENA O ELEMENTO HTML EM UMA CONSTANTE ATRAVÉS DO SEU NOME OU NOME DA CLASSE

//title.style.color = VOCÊ PODE MUDAR A COR DO ELEMENTO OU ALTERAR SEU ESTILO UTILIZANDO O STYLE E O NOME DO ATRIBUTO

changeButton.addEventListener('click', function(){title.classList.toggle('title-style2')}); //O 'TOGGLE' PERMITE VOLTAR AO ESTILO PRIMÁRIO SE O USUÁRIO CLICAR NO BOTÃO NOVAMENTE. JÁ O 'ADD' NÃO


const userList = document.querySelectorAll(".lista li"); //SELECIONA TODOS OS ELEMENTOS DA LISTA

console.log(userList);

for(user of userList){

    user.addEventListener('click', function(){this.style.color = "red";}); //ADICIONA A COR VERMELHA AOS ELEMENTOS CLICADOS
}


/***************************************************************************************************************** */


const myInput = document.querySelector(".my-input")

const addButton = document.querySelector(".add-button");

const userList2 = document.querySelector(".lista2")


addButton.addEventListener('click', function(){

const newLi = document.createElement("LI"); //FAZ A CRIAÇÃO DE UMA LINHA FLUTUANTE

const liContent = document.createTextNode(myInput.value); //FAZ A CRIAÇÃO DO CONTEÚDO DESSA LINHA

newLi.appendChild(liContent); //ANEXA A O CONTEUDO DA LINHA A LINHA FLUTUANTE

userList2.appendChild(newLi); //ANEXA A LINHA FLUTUANTE À LISTA
}); 