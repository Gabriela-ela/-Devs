document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const tabuada = document.getElementById("tabuada");

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const numero = parseInt(input.value);
      tabuada.innerHTML = "";

      if (!isNaN(numero)) {
        for (let i = 1; i <= 10; i++) {
          const resultado = numero * i;
          const linha = document.createElement("tr");
          linha.innerHTML = `<td>${numero} x ${i} = ${resultado}</td>`;
          tabuada.appendChild(linha);
        }
      } else {
        tabuada.innerHTML = "<tr><td>Digite um número válido!</td></tr>";
      }

      input.value = "";
      input.focus();
    }
  });
});