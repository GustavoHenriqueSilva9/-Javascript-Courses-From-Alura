console.log("Execução")
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo",11122233309);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500)
conta1.sacar(100); 

const conta2 = new ContaPoupanca(50,cliente1,1001)


console.log(conta1)
console.log(conta2)