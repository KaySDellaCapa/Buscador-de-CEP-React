import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({}) // Começa como objeto vazio

  // Emite um alerta quando não digita nada e pede para pesquisar
  async function handleSearch () {
    if (input === '') {
      alert("Preencha com algum CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json`); //Usa o input, chama o valor no formato json
      console.log(response);
      setCep(response.data);// Objeto que tem de retorno
      setInput(""); // Volta para vazio após pesquisar


    } catch { //Caso dê algum erro na API ou digite um CEP inexistente
      alert('Ops! Erro ao buscar');
      setInput(""); // Volta para vazio

    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o CEP"
        value={input}
/* onChange recebe uma função anonima. Recebe o "e" de event */
        onChange={(e) => setInput(e.target.value) } /* quando acessa pega tudo que foi digitado e passando para o input*/ 
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

      </main>
      )}

    </div>
  );
}

export default App;
