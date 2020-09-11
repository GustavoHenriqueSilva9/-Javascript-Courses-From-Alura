
class Cliente{ //classe = Molde
    nome;//atributos
    cpf;
}
class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){ // Operação - Método
        if (this.saldo >= valor){ // this para acessar o valor dessa conta corrente
            this.saldo -= valor
        }
    } 
}

const cliente1 = new Cliente(); // uma instancia da classe
cliente1.nome = "Ricardo"; //obejeto a partir do Molde
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Ricardo"; //obejeto a partir do Molde
cliente2.cpf = "66699988807"; 


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo)


// Testando o Metodo Sacar
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo)



console.log(cliente1)
console.log(cliente2)