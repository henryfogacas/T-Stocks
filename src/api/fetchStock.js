import axios from 'axios'; //Uma biblioteca cliente HTTP baseada em Promises, para fazer solicitações de rede. O Axios simplifica muito o trabalho com solicitações HTTP em JavaScript.

const API_KEY = 'U1AD7PNCLJ96E6RL';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStock = async (symbol) => {
    try {
      const { data } = await axios.get(BASE_URL, {
        params: {
          function: 'GLOBAL_QUOTE',
          symbol,
          apikey: API_KEY,
        },
      });
  
      // Verifica se a resposta da API contém dados válidos
      if (data && data['Global Quote'] && Object.keys(data['Global Quote']).length > 0) {
        // Estrutura os dados de maneira mais clara antes de retorná-los
        const quote = data['Global Quote'];
        return {
          symbol: quote['01. symbol'],
          open: quote['02. open'],
          high: quote['03. high'],
          low: quote['04. low'],
          price: quote['05. price'],
          volume: quote['06. volume'],
          latestTradingDay: quote['07. latest trading day'],
          previousClose: quote['08. previous close'],
          change: quote['09. change'],
          changePercent: quote['10. change percent'],
        };
      } else {
        // Se não houver dados válidos, retorna uma mensagem de erro específica
        throw new Error('Dados da ação não encontrados ou resposta da API está vazia.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados da ação:', error.message || error);
      // Retornar null ou lançar o erro depende da sua estratégia de tratamento de erros
      // Aqui estamos optando por retornar null para manter a função pura
      return null;
    }
  };
