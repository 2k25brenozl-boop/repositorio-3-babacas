const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Dados iniciais para testar a rota GET.
const produtos = [
  { id: 1, nome: "Boné clássico", modelo: "Tradicional", quantidade: 25 },
  { id: 2, nome: "Boné aba reta", modelo: "Aba reta", quantidade: 18 },
  { id: 3, nome: "Boné trucker", modelo: "Tela", quantidade: 12 }
];

app.get("/", (req, res) => {
  res.json({ mensagem: "API do Sistema BJB funcionando!" });
});

// Rota GET para listar os produtos cadastrados.
app.get("/api/produtos", (req, res) => {
  res.status(200).json(produtos);
});

app.listen(PORT, () => {
  console.log(`Servidor BJB rodando em http://localhost:${PORT}`);
});
