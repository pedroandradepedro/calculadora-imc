let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = (peso / (altura * altura)).toFixed(2);

  resultado = document.getElementById("resultado");

  if (imc < 17) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}.<br/> Você está MUITO ABAIXO DO PESO!`;
  } else if (imc >= 17 && imc <= 18.49) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}.<br/> Você está ABAIXO DO PESO!`;
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}.<br/> Você está no PESO IDEAL!`;
  } else if (imc >= 25 && imc <= 29.99) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}.<br/> Você está ACIMA DO PESO!`;
  } else {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}.<br/> Você está OBESO!`;
  }

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
