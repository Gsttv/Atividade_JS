var altura;
var sexo;
var alturaMaior=0;
var qntMulheres = 0;
var qntHomens = 0;
var alturaMenor;
var soma = 0;


for (var i = 0; i < 15; i++) {
    altura = (parseFloat(prompt("Digite sua altura")));
    sexo = prompt("Digite seu sexo m/f");
    if(i==0){
        alturaMaior = altura;
        alturaMenor = altura;
    }else{
        if(altura>alturaMaior){
            alturaMaior = altura;
        }
        if(altura<alturaMenor){
            alturaMenor = altura;
        }
    }
    if(sexo=="f"){
        qntMulheres++;
    }else{
        qntHomens++;
        soma = altura +soma;
    }
    
}
var media = soma/qntHomens
console.log("Altura maior: "+ alturaMaior)
console.log("altura menor: "+ alturaMenor)
console.log("Quantidade mulheres: "+ qntMulheres)
console.log("Media alltura homens: "+ media)