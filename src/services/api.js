import axios from 'axios';

const api = axios.create({

  //url de onde o back-end fará solicitações passando as rotas
  baseURL: 'http://localhost:3333'

});

export default api;