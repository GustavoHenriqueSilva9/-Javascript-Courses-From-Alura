export class ContaCorrente {
    agencia;
    _saldo = 0; // # é o tipo da variavel que está privada
    cliente;


    
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
}