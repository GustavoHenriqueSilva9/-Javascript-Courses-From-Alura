var BotaoAdicionar = document.querySelector("#buscar-paciente");

BotaoAdicionar.addEventListener("click", () => {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest(); // OBJ responsável por fazer requisições http tipo de dado XML

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        var erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            //JSON Javascript object notation 
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            pacientes.forEach(function (paciente) {
                adicionaPaciente(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);

        }

    });

    xhr.send()

})