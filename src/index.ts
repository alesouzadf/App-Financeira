import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Bem vindo ao projeto de Aplicação Financeira</h1>");
});

app.listen(port, () => {
  console.log(`Servidor rodando! Acesse em http://localhost:${port}`);
});
