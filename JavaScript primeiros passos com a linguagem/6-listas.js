console.log("Trabalhando com Listas")
const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio De Janeiro";

console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro);

//Ao inves de ter todo esse trabalho de criar uma variavel para cada cidade, podemos criar um Array("Lista"), que irá conter todas as cidades
const listaDeDestinos= new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
)
listaDeDestinos.push('Curitiba') // adicionando um Elemento na lista
console.log("Adicionando um item da Lista:  "+listaDeDestinos)
listaDeDestinos.splice(1,1)// splice deleta um elemento da Lista, o primeiro parametro é a posição inicial para apagar, e o segundo a quantidade de itens para apagar
console.log("Deletando um item da Lista :  "+listaDeDestinos)

// Também posso exibir itens distintos de uma lista, passando como parametro a posição
console.log("Mostrando a posição 0: "+listaDeDestinos[0])
