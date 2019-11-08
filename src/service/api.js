import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://playground.barato.com.br/desafio-front/api/',
});

export default api;
