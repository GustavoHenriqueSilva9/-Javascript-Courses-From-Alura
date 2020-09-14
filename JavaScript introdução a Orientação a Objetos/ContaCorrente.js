import { Cliente } from "./Cliente.js";

export class ContaCorrente { 
    
    agencia;
    _cliente;
    _saldo = 0; // # é o tipo da variavel que está privada

    set cliente(novoValor){ // Acessores set para modificar
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){ // Acessores  get para exibir/mostrar
        return this._cliente
    }
    get saldo(){ // Acessores  
        return this._saldo
    }


    sacar(valor) { // Operação - Método
        if (this._saldo >= valor) { // this para acessar o valor dessa conta corrente
            this._saldo -= valor
            return valor // quando achar o retorno ele irá me retornar o valor e para a execução do programa
        }
    }

    depositar(valor) { // Operação - Método
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}