const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { getBoardData } = require('./trelloApiHandler'); // Importa a função do módulo trelloApiHandler

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Servidor do Power-Up Trello funcionando!');
});

// Nova rota para buscar dados do quadro
app.get('/board/:boardId', async (req, res) => {
  try {
    const boardId = req.params.boardId; // Obtém o ID do quadro a partir dos parâmetros da URL
    const data = await getBoardData(boardId); // Chama a função para obter os dados do quadro
    res.json(data); // Envia os dados do quadro como resposta
  } catch (error) {
    console.error('Erro ao buscar dados do quadro:', error);
    res.status(500).send('Erro ao buscar dados do quadro');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
