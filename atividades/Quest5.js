function calcularFatorial() {
    const num = parseInt(document.getElementById('numero').value);
    let resultado = 1;

    if (isNaN(num) || num < 0) {
        document.getElementById('resultado').textContent = "Por favor, informe um número inteiro não negativo.";
        return;
    }

    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }

    document.getElementById('resultado').textContent = `O fatorial de ${num} é ${resultado}.`;
}