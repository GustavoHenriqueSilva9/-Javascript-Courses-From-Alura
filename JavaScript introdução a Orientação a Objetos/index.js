console.log("Execução")
import {ContaCorrente} from "./ContaCorrente.js"
import {Cliente} from "./Cliente.js"

const cliente1 = new Cliente(); // uma instancia da classe
cliente1.nome = "Ricardo"; //obejeto a partir do Molde
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Gustavo"; //obejeto a partir do Molde
cliente2.cpf = "66699988807";

const conta2 = new ContaCorrente();
conta2.agencia = 1336;
// conta2.cliente = null; // Colocar nada nesse espaço de memoria, então ele será Nulo! o Nulo alguém colcoou, undefined não!
conta2.cliente = cliente2;
// conta2.cliente.nome = "Gustavo";
// conta2.cliente.cpf = 66699988807;
conta2.depositar(500)

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1 
//conta1.saldo = 100; Não podemos colocar dessa forma pois o atributo está privado
conta1.depositar(500)// Testando Metodo Depositar
conta1.sacar(50); // Testando o Metodo Sacar
conta1.transferir(300, conta2);


console.log("Cliente 1:")
console.log(conta1)

console.log("Cliente 2:")
console.log(conta2)
