import axios from "axios";

// Configurando a baseURL
// baseURL é que não vai mudar. É a base do projeto

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;