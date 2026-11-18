const API_URL = "http://localhost:3000/api/produtos";

const listaProdutos = document.getElementById("produtos");
const mensagem = document.getElementById("mensagem");
const botaoAtualizar = document.getElementById("atualizar");

async function carregarProdutos() {
  mensagem.textContent = "Carregando produtos...";
  listaProdutos.innerHTML = "";

  try {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error("Não foi possível consultar a API.");

    const produtos = await resposta.json();
    mensagem.textContent = produtos.length
      ? `${produtos.length} produto(s) encontrado(s).`
      : "Nenhum produto cadastrado.";

    produtos.forEach((produto) => {
      const card = document.createElement("article");
      card.className = "produto";

      const nome = document.createElement("h3");
      nome.textContent = produto.nome;

      const modelo = document.createElement("p");
      modelo.textContent = `Modelo: ${produto.modelo}`;

      const quantidade = document.createElement("span");
      quantidade.className = "quantidade";
      quantidade.textContent = `Estoque: ${produto.quantidade} unidades`;

      card.append(nome, modelo, quantidade);
      listaProdutos.appendChild(card);
    });
  } catch (erro) {
    mensagem.textContent = "Não foi possível conectar ao backend. Confira se a API está rodando na porta 3000.";
    console.error(erro);
  }
}

botaoAtualizar.addEventListener("click", carregarProdutos);
carregarProdutos();
