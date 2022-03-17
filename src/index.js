import ReactDom from 'react-dom';
import React from 'react';

import TelaInicio from './components/TelaInicio';
import TelaPerguntas from './components/TelaPerguntas';


function App() {
  const [abrirDeck, setAbrirDeck] = React.useState(true);

  function acionaAbrirDeck() {
    setAbrirDeck(true);
  }

  const deckReact = [
    {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", respondido: ""},
    {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces", respondido: ""},
    {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", respondido: ""},
    {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", respondido: ""},
    {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", respondido: ""},
    {pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", respondido: ""},
    {pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes", respondido: ""},
    {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", respondido: ""},
  ];

  return (
      <>
        {!abrirDeck ? <TelaInicio fncAbrirDeck={acionaAbrirDeck}/> : <TelaPerguntas deck={deckReact}/>}
      </>
  )
}

ReactDom.render(<App />, document.querySelector(".root"));