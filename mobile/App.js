import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes  screeenOptions={{ headerShown: false, }}/>
  );
}

//React native tem poucas tags: View, Text
//Estilização: Não há class name nem ID
  //Há de se passar style={} que recebe um objeto com a estilização
//Todos elementos do react native já tem display: flex padrão
//Propriedades
  //não tem hifem mas sim camelCase
  //valores não numéricos todos recebem aspas simples ou duplas
//Heranca de estilos
  //Não existe herança de estilos
  //devemos passar em cada componente
  //estilização própria para cada elemento

//classe para criação dos estilos
/*
const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa tamanho todo
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/