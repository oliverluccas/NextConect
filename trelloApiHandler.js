const axios = require('axios');

const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;

const BASE_URL = 'https://api.trello.com/1/';

const getBoardData = async (boardId) => {
  try {
    const boardUrl = `${BASE_URL}boards/${boardId}/lists?cards=all&key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
    const response = await axios.get(boardUrl);
    return response.data; // Retorna os dados do quadro
  } catch (error) {
    console.error('Erro ao buscar dados do quadro:', error);
    throw error; // Propaga o erro
  }
};

module.exports = { getBoardData };
