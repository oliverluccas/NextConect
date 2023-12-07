const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

// Inicializa variáveis de ambiente
dotenv.config();

// Cria a instância do express (o servidor web)
const app = express();

// Habilita o CORS para que seu site WordPress possa fazer requisições para este servidor
app.use(cors());

// Define uma rota básica para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor do Power-Up Trello funcionando!');
});

// Insira suas rotas e lógica da API aqui
// Exemplo: app.get('/data', (req, res) => { /* Sua lógica de API */ });

// Define a porta e inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
