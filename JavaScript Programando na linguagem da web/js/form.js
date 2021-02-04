//Adicionar um novo paciente
botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();// remove o comportamento padrão do botão, que recarrega a página.
    console.log("Esta chamando a função.")
    var form = document.querySelector("#form-adiciona")
    // var altura = form.querySelector("#altura").value


    //Extraindo informações do paciente do Form
    var paciente = obtemPacienteDoFormulario(form);

    adicionaPaciente(paciente)

    form.reset(); // Tira os escritos dos inputs


});




function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    };
    return paciente;
};

function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));// Coloque como Filho
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "imc-nome"));

    
    var erro = validaPaciente(paciente);
    
    
    if (erro.length == 0) {
        tabela.appendChild(pacienteTr);
    };

    if (erro.length > 0) {
        exibeMensagensDeErro(erro)
    };

    return pacienteTr
    

}

function adicionaPaciente(paciente){
    //Cria a tr e a td do paciente
    var pacienteTr = criaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#error");
    ul.innerHTML = " ";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })

};

function validaPaciente(paciente) {

    var erros = []

    if (!validaPeso(paciente.peso)) erros.push("Peso Invalido");
    if (!validaAltura(paciente.altura)) erros.push("Altura Invalida");
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em Branco");
    }
    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode ser em Branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O Peso não pode ser em Branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A Altura não pode ser em Branco");
    }

    return erros;

}


