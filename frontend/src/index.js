import React from 'react';
import ReactDOM from 'react-dom'; // Integraçaõ do react com o navegador
import App from './App'; // Importando o app

//renderiza o app dentro da div com id root
  //componente no react é uma função que retorna html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

