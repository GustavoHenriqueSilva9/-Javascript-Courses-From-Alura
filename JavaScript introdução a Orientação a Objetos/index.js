console.log("Execução")
import {ContaCorrente} from "./ContaCorrente.js"
import {Cliente} from "./Cliente.js"

const cliente1 = new Cliente(); // uma instancia da classe
cliente1.nome = "Ricardo"; //obejeto a partir do Molde
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Ricardo"; //obejeto a partir do Molde
cliente2.cpf = "66699988807";


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente2
// contaCorrenteRicardo.saldo = 100; Não podemos colocar dessa forma pois o atributo está privado
console.log(contaCorrenteRicardo._saldo)

// Testando Metodo Depositar
contaCorrenteRicardo.depositar(300)
console.log(contaCorrenteRicardo._saldo)

// Testando o Metodo Sacar
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo._saldo)
console.log(valorSacado)




console.log(contaCorrenteRicardo)
console.log(cliente1)
console.log(cliente2)