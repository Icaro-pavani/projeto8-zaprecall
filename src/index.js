import ReactDom from 'react-dom';
import React from 'react';

import TelaInicio from './components/TelaInicio';
import TelaPerguntas from './components/TelaPerguntas';


function App() {
  const [abrirDeck, setAbrirDeck] = React.useState(false);

  function acionaAbrirDeck() {
    setAbrirDeck(true);
  }

  const deckReact = [
    {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", acuracia: ""},
    {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces", acuracia: ""},
    {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", acuracia: ""},
    {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", acuracia: ""},
    {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", acuracia: ""},
    {pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", acuracia: ""},
    {pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes", acuracia: ""},
    {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", acuracia: ""},
  ];

  return (
      <>
        {!abrirDeck ? <TelaInicio fncAbrirDeck={acionaAbrirDeck}/> : <TelaPerguntas deck={deckReact}/>}
      </>
  )
}

ReactDom.render(<App />, document.querySelector(".root"));