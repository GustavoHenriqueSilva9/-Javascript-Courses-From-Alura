console.log("\n Trabalhando com condicionais");
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;

console.log("Destinos possiveis");
console.log(listaDeDestinos);
const destino = "São Paulo";



let contador = 0; //variavel contador

while (contador < 3) { // while é a estrutura de repetição enquanto, onde ela irá repetir suas condições enquanto a regra for verdadeira
    if (listaDeDestinos[contador] == destino) {
        if (idadeComprador >= 18 || estaAcompanhada == true) { // se a condição for satisfeita irá entrar nesse bloco de códico
            console.log("Boa Viagem");
            listaDeDestinos.splice(1, 1);//Removendo item
            temPassagemComprada = true;
        } else {
            console.log("Não é maior de idade, Não está com acompanhante")
            temPassagemComprada = false;
        }
        console.log(listaDeDestinos);
        console.log("Embarque: \n");
        if (idadeComprador >= 18 && temPassagemComprada) {
            console.log("Passageiro no avião");
        } else {
            console.log("Não pode embarcar");
        }
        break
    } else {
        console.log("Destino inexistente")

    }
    contador++
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


for (let i = 0; i < 3; i++) { // For é uma estrutura de repetição que em seu corpo você já declara o contador e quantas vezes ele irá acumular por loop
    if (listaDeDestinos[i] == destino) {
        if (idadeComprador >= 18 || estaAcompanhada == true) { // se a condição for satisfeita irá entrar nesse bloco de códico
            console.log("Boa Viagem");
            listaDeDestinos.splice(1, 1);//Removendo item
            temPassagemComprada = true;
        } else {
            console.log("Não é maior de idade, Não está com acompanhante")
            temPassagemComprada = false;
        }
        console.log(listaDeDestinos);
        console.log("Embarque: \n");
        if (idadeComprador >= 18 && temPassagemComprada) {
            console.log("Passageiro no avião");
        } else {
            console.log("Não pode embarcar");
        }
        break
    } else {
        console.log("Destino inexistente")

    }
}