console.log('Conversão de tipos')

console.log("ano" + 2020);
console.log("2" + "2");

// parseInt, converte a String("Escrito") em inteiro("Número")
    console.log("Número Inteiro: "+(parseInt("2")) + (parseInt("2"))); 
    //também temos uma função parecida com o parseInt, que é utilizada para números com pontos flutuantes ou quebrados, como preferir dizer.
    console.log("Número com casas depois da virgula "+((parseFloat("2.2")) + (parseFloat("2.2")))); 


// no caso da divisão e multiplicação, essa convesão é realizada de maneira automática 
    console.log("10" * "2");
    console.log("10" / "2"); 
    console.log("Gustavo" / "2"); //Irá retorna um NaN, ou seja não é um número


//A virgula é utilizada para separar os números, no lugar dela devemos utilizar o ponto '.'
    console.log(6,5) // = 6 5
    console.log(6.5) // = 6.5



