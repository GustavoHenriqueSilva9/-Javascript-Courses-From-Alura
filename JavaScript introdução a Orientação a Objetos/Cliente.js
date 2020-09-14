export class Cliente { //classe = Molde
    nome; //atributo
    _cpf; //atributo

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}