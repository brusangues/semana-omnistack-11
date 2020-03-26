import React, {useState} from 'react';

import Logon from './pages/Logon';

import Routes from './routes';

import './global.css'

function App() {

  return (
    <Routes />
  );
}

export default App;

/*
function App() {
  const [counter, setCounter] = useState(0);
    //retorna array com [valor, funcaoDeAtualização]

  function increment() {
    setCounter(counter +1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    
  );
}
*/

// JSX: Quando o HTML está escrito dentro do arquivo js, ele é chamado JSX (JS XML)
// COMPONENTE: Abaixo, um componente no react
  //Componente é criado quando representa um trecho que se repete muito
  //ou quando é possível isolá-lo

//PROPRIEDADES: no React são análogas aos atributos do HTML
  //Porém, são atributos repassados para componentes ao invés de elementos do HTML

//ESTADO: Informação que será mantida pelo componente
  //IMUTABILIDADE: Dentro do react nunca podemos manipular variáveis diretamente (por performance)
