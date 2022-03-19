import ReactDom from 'react-dom';
import React from 'react';

import "./css/reset.css";
import "./css/style.css";

import StartScreen from './components/StartScreen';
import QuestionsScreen from './components/QuestionsScreen';


function App() {
  const [openDeck, setOpenDeck] = React.useState(false);

  function activateOpenDeck() {
    setOpenDeck(true);
  }

  const deckReact = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
    {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
  ];

  return (
      <>
        {!openDeck ? <StartScreen fncOpenDeck={activateOpenDeck}/> : <QuestionsScreen deck={deckReact} setOpenDeck={setOpenDeck} />}
      </>
  )
}

ReactDom.render(<App />, document.querySelector(".root"));