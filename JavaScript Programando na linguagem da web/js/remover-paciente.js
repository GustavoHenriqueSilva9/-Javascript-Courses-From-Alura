var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    console.log(event);
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();

    }, 1000)


    //parentNode, o pai do elemento o qual queremos remover
    // o qual foi clicado, "target" ,evento que borbulha
});