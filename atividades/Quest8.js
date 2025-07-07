const questoes = [
  {
    pergunta: "Qual a capital do Brasil?",
    alternativas: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    correta: 1
  },
  {
    pergunta: "Qual o maior planeta do Sistema Solar?",
    alternativas: ["Terra", "Júpiter", "Saturno", "Marte"],
    correta: 1
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    alternativas: ["Machado de Assis", "José de Alencar", "Carlos Drummond", "Clarice Lispector"],
    correta: 0
  },
  {
    pergunta: "Qual o símbolo químico da água?",
    alternativas: ["O2", "CO2", "H2O", "NaCl"],
    correta: 2
  },
  {
    pergunta: "Em que continente fica o Egito?",
    alternativas: ["África", "Ásia", "Europa", "América"],
    correta: 0
  },
  {
    pergunta: "Qual é o menor número primo?",
    alternativas: ["0", "1", "2", "3"],
    correta: 2
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    alternativas: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    correta: 1
  },
  {
    pergunta: "Qual o idioma oficial da Argentina?",
    alternativas: ["Português", "Espanhol", "Francês", "Italiano"],
    correta: 1
  },
  {
    pergunta: "Qual animal é símbolo da Austrália?",
    alternativas: ["Canguru", "Leão", "Urso", "Elefante"],
    correta: 0
  },
  {
    pergunta: "Qual o resultado de 7 x 8?",
    alternativas: ["54", "56", "58", "64"],
    correta: 1
  }
];

let perguntasSelecionadas = [];
let indiceAtual = 0;
let acertos = 0;
let respostaSelecionada = null;

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function iniciarQuiz() {
  perguntasSelecionadas = [...questoes];
  embaralhar(perguntasSelecionadas);
  perguntasSelecionadas = perguntasSelecionadas.slice(0, 5);
  indiceAtual = 0;
  acertos = 0;
  mostrarPergunta();
}

function mostrarPergunta() {
  respostaSelecionada = null;
  document.getElementById("resultado").textContent = "";
  document.getElementById("proxima").style.display = "none";
  const q = perguntasSelecionadas[indiceAtual];
  document.getElementById("pergunta").textContent = `Pergunta ${indiceAtual + 1}: ${q.pergunta}`;
  const alternativasDiv = document.getElementById("alternativas");
  alternativasDiv.innerHTML = "";
  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => selecionarAlternativa(btn, i);
    alternativasDiv.appendChild(btn);
  });
}

function selecionarAlternativa(botao, indice) {
  if (respostaSelecionada !== null) return;
  respostaSelecionada = indice;
  document.querySelectorAll("#alternativas button").forEach(b => b.classList.remove("selected"));
  botao.classList.add("selected");
  document.getElementById("proxima").style.display = "inline-block";
}

document.getElementById("proxima").onclick = function () {
  if (respostaSelecionada === null) return;
  if (respostaSelecionada === perguntasSelecionadas[indiceAtual].correta) acertos++;
  indiceAtual++;
  if (indiceAtual < perguntasSelecionadas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
};

function mostrarResultado() {
  document.getElementById("pergunta").textContent = "Quiz finalizado!";
  document.getElementById("alternativas").innerHTML = "";
  document.getElementById("proxima").style.display = "none";
  document.getElementById("resultado").textContent = `Você acertou ${acertos} de ${perguntasSelecionadas.length} perguntas!`;
}

window.onload = iniciarQuiz;