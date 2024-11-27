// index.js

const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes"); // Importa as rotas de usuários

// Habilita CORS para permitir requisições de origens diferentes
app.use(cors());

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Usa as rotas definidas no arquivo userRoutes
app.use(userRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
