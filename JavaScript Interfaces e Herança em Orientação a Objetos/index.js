console.log("Execução")
import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Ricardo",11122233309);

const conta1 = new ContaSalario(cliente1, 1001);
conta1.depositar(500)
conta1.sacar(100); 

console.log(conta1)
