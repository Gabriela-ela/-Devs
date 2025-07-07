function calcularAnoBissexto(){
    const ano = parseInt(document.getElementById('ano').value);
    const resultado =document.getElementById('resultado');
    if (isNaN(ano)) {
    resultado.innerText = "Por favor, digite um ano válido.";
    return;
    }
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    resultado.innerText = `O ano ${ano} é bissexto.`;
    } else {
    resultado.innerText = `O ano ${ano} não é bissexto.`;
    }
}