function calcularIMC(){
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
 
  if(altura > 0 && peso > 0){
    const imc = (peso / (altura * altura)).toFixed(2);
 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu IMC é: ${imc}`;
 
    const resultado_imc = document.getElementById('resultado_imc');
 
    if(imc < 18.5) {
      resultado_imc.innerText = "Abaixo do peso";
    } else if(imc <= 24.9) {
      resultado_imc.innerText = "Peso ideal";
    } else if(imc <= 29.9) {
      resultado_imc.innerText = "Sobrepeso";
    } else if(imc <= 34.9){
      resultado_imc.innerText = "Obesidade grau 1";
    } else if(imc <= 39.9){
      resultado_imc.innerText = "Obesidade grau 2";
    } else {
      resultado_imc.innerText = "Obesidade grau 3";
    }
  } else {
    alert("Por favor, insira valores válidos para altura e peso.");
  }
}