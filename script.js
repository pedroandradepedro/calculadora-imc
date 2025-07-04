let peso;
let altura;
let imc;
let resultado;
let background;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  background = document.querySelector(".right");

  imc = (peso / (altura * altura)).toFixed(2);

  resultado = document.getElementById("resultado");

  resultado.style.color = "";

  if (imc < 17) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}<br/> Você está MUITO ABAIXO DO PESO!`;
    background.style.backgroundColor = "red";
  } else if (imc >= 17 && imc <= 18.49) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}<br/> Você está ABAIXO DO PESO!`;
    background.style.background = "#f7c900";
    resultado.style.color = "#242424";
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}<br/> Você está no PESO IDEAL!`;
    background.style.background = "green";
  } else if (imc >= 25 && imc <= 29.99) {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}<br/> Você está ACIMA DO PESO!`;
    background.style.background = "red";
  } else {
    resultado.innerHTML = `<br/><br/>O resultado do seu IMC foi: ${imc}<br/> Você está OBESO!`;
    background.style.background = "red";
  }

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
