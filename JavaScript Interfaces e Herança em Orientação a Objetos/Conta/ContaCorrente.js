import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{   
    static numeroDeContas = 0;
    constructor(cliente,agencia){
        super(0,cliente,agencia) // Chama o Construtor do pai, podendo passar parametros!,o super tem a utilidade de chamar o mesmo método de seu pai
        ContaCorrente.numeroDeContas += 1;

       
    }
    //Sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        
        return this._sacar(valor,taxa);
    }

}