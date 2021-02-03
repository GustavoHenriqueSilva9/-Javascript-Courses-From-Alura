var campoFiltro = document.querySelector(".filtrar-tabela")

// Evento de input escuta o digitar
campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value != "") {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")
            
            if (expressao.test(nome)) {
                paciente.classList.remove("none")

            } else {
                paciente.classList.add("none")

            }


        }

    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("none")

        }
    }

});
