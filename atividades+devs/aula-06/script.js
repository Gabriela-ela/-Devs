let enderecos = [];
fetch('http://localhost:3000/enderecos')
  .then(res => res.json())
    .then(data => {
        enderecos = data;
        gerarTabela();
        });

function buscarCEP(){
    let cep = document.getElementById('cep').value;
    if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById('estado').value = data.uf;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('logradouro').value = data.logradouro;
        }
      });
  }
}

function gerarTabela() {
  let tabela = document.getElementById('tabela');
  tabela.innerHTML = '';
  for (let i = 0; i < enderecos.length; i++) {
    let linha = tabela.insertRow(-1);
    let colNome = linha.insertCell(0);
    let colCep = linha.insertCell(1);
    let colEndereco = linha.insertCell(2);
    let colAcoes = linha.insertCell(3);
    colNome.innerText = enderecos[i].nome;
    colCep.innerText = enderecos[i].cep;
    colEndereco.innerText = `${enderecos[i].logradouro}, ${enderecos[i].bairro} - ${enderecos[i].cidade}/${enderecos[i].estado}`;
    colAcoes.innerHTML = `<button class='btn btn-primary btn-sm' onclick='selecionar(${i})'>Selecionar</button>`;
  }
}

function cadastrar() {
  let nome = document.getElementById('nome').value.trim();
  let cep = document.getElementById('cep').value.trim();

  if (!nome || !cep) {
    alert('Preencha o nome e o CEP!');
    return;
  }

  let obj = {
    nome: nome,
    cep: cep,
    estado: document.getElementById('estado').value,
    cidade: document.getElementById('cidade').value,
    bairro: document.getElementById('bairro').value,
    logradouro: document.getElementById('logradouro').value
  };
  fetch('http://localhost:3000/enderecos', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(e => {   
    enderecos.push(e);
    gerarTabela();
    cancelar();
  });
}

function selecionar(i) {
    let obj = enderecos[i];
    document.getElementById('id').value = obj.id;
    document.getElementById('nome').value = obj.nome;
    document.getElementById('cep').value = obj.cep;
    document.getElementById('estado').value = obj.estado;
    document.getElementById('cidade').value = obj.cidade;
    document.getElementById('bairro').value = obj.bairro;
    document.getElementById('logradouro').value = obj.logradouro;
    
    document.getElementById('btnAlterar').style.display = 'inline-block';
    document.getElementById('btnRemover').style.display = 'inline-block';
    document.getElementById('btnCancelar').style.display = 'inline-block';
}

function cancelar() {
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('btnCadastrar').style.display = 'inline-block';
    document.getElementById('btnAlterar').style.display = 'none';
    document.getElementById('btnRemover').style.display = 'none';
}

function alterar() {
    let id = document.getElementById('id').value;
    let obj = {
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value,
        bairro: document.getElementById('bairro').value,
        logradouro: document.getElementById('logradouro').value
    };
    fetch(`http://localhost:3000/enderecos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(e => {
        let index = enderecos.findIndex(endereco => endereco.id === id);
        if (index !== -1) {
            enderecos[index] = e;
            gerarTabela();
            cancelar();
        }
    });
}

function remover() {
    let id = document.getElementById('id').value;
    fetch(`http://localhost:3000/enderecos/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        enderecos = enderecos.filter(endereco => endereco.id !== id);
        gerarTabela();
        cancelar();
    });
}