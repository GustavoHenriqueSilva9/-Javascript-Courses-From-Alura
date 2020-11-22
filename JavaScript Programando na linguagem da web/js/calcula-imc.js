document.querySelector(".titulo"); // document seleciona todo o documento html e o query selector se especifica em um seletor em quetão.

var titulo = document.querySelector(".titulo");
console.log(titulo); // exibi todo o h1 juntamente com sua tag
console.log(titulo.textContent); // exibe somente o conteúdo da tag

titulo.textContent = "Alteração do Texto"; // para alterar todo o conteúdo do texto

// Fazendo o calculo de IMC //

var pacientes = document.querySelectorAll(".paciente"); //Sleciona todos os seletores, não apenas o primeiro


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var pesoEhValido = true;
    var alturaEhValida = true;

    var altura = paciente.querySelector(".info-altura").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;
    imcResult = paciente.querySelector(".info-imc");

  if (peso <= 0 || peso >= 1000) {
    imcResult.textContent = "Peso Inválido";
    pesoEhValido = false;
    //Inserir uma classe ao inves d manipular pelo JS e uma pratica melhor
        // paciente.style.backgroundColor = "lightcoral";
    paciente.classList.add("paciente-invalido")// classList retorna todas as classes, e essa propiedade vem com algumas funcionalidades como "add" para adicionar uma classe

  }
  else if(altura <= 0 || altura >= 3.0){
    imcResult.textContent = "Altura invalida";
    alturaEhValida = false;
    // paciente.style.backgroundColor = "lightcoral";
    paciente.classList.add("paciente-invalido")
  }

  
  if (alturaEhValida && pesoEhValido) {
    imcResult.textContent = calculaImc(peso, altura);//To fixed, duas casas decimais depois da virgula
    }
 
}

titulo.addEventListener("click", mostraMensagem);// escutar do tipo click  

function mostraMensagem(){
    console.log("Cliquei no texto")
}
 

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
  

