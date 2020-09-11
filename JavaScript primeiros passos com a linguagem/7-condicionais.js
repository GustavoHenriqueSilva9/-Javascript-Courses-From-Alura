console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
)
const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada;

console.log("Destinos possiveis")
console.log(listaDeDestinos)

// if (idadeComprador >= 18) { // se a condição for satisfeita irá entrar nesse bloco de códico
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1)//Removendo item
// } else if (estaAcompanhada) { // caso tenha uma condição dentro da outra, ao inves de somente else, utilize 'else if'
//     console.log("Está acompanhada")
//     listaDeDestinos.splice(1, 1)//Removendo item
// } else {
//     console.log("Não é maior de idade, Não está acompanhada")
// }

if (idadeComprador >= 18 || estaAcompanhada == true) { // se a condição for satisfeita irá entrar nesse bloco de códico
    console.log("Boa Viagem")
    listaDeDestinos.splice(1, 1)//Removendo item
    temPassagemComprada = true;
}else{
    console.log("Não é maior de idade, Não está com acompanhante")
}
console.log(listaDeDestinos)
console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Passageiro no avião")
}else{
    console.log("Não pode embarcar")
}





// Operadores Lógicos 
    // > Maior
    // < Menor
    // >= Maior ou igual
    // == Igual
    // <= Menor ou igual
    // && 'E'
    // || 'OU'