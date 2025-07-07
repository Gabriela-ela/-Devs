const numAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const mensagem = document.getElementById("mensagem");
  const tentativasTexto = document.getElementById("tentativas");

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      tentativas++;

      const valor = parseInt(input.value);
      const diferenca = Math.abs(numAleatorio - valor);

      tentativasTexto.textContent = `Tentativas: ${tentativas}`;

      if (diferenca === 0) {
        mensagem.textContent =
          tentativas === 1
            ? "🎯 Acertou de primeira!"
            : `🎉 Acertou em ${tentativas} tentativas!`;
        input.disabled = true;
      } else if (diferenca <= 5) {
        mensagem.textContent = "😬 Quase!";
      } else if (diferenca <= 10) {
        mensagem.textContent = "🙂 Perto!";
      } else if (diferenca <= 20) {
        mensagem.textContent = "😐 Longe!";
      } else {
        mensagem.textContent = "😵 Muito longe!";
      }

      input.value = "";
      input.focus();
    }
  });
});