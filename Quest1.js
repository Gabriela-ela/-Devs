function calcularNota () {
    let form = document.getElementById('form');

    let nota1 = parseFloat(form.nota1.value);
    let nota2 = parseFloat(form.nota2.value);
    let nota3 = parseFloat(form.nota3.value);

    let total = (nota1 + nota2 + nota3) / 3;

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `Média: ${total.toFixed(2)}`;

    let exibir = document.getElementById('situacao');

    let situacao = total >= 7 ?'Aprovado' : total >= 5 ? 'Recuperação' : 'Reprovado';

    exibir.innerHTML = `Situação: ${situacao}`;
    
    return false;
}