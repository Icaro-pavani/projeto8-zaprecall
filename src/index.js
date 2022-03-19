import ReactDom from 'react-dom';
import React from 'react';

import "./css/reset.css";
import "./css/style.css";

import StartScreen from './components/StartScreen';
import QuestionsScreen from './components/QuestionsScreen';


function App() {
  const [openDeck, setOpenDeck] = React.useState(false);
  const [zapGoal, setZapGoal] = React.useState(0);
  const [deck, setDeck] = React.useState([]);

  function getDeck(event) {
    if (event.target.value === "React"){
      setDeck([...deckReact]);
    } else if (event.target.value === "Recall veícular"){
      setDeck([...deckRecallVeicular]);
    }
  }

  function activateOpenDeck() {
    setOpenDeck(true);
  }

  function getZapGoal(event) {
    setZapGoal(event.target.value);
  }

  const deckReact = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
    {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
  ];

  const deckRecallVeicular = [
    {question: "Como é feita a comunicação de um recall veícular?", answer: "Por meio de comunicação padrões: internet, TV, rádio, jornais"},
    {question: "Qual outro nome para recall veícular?", answer: "Aviso de Risco"},
    {question: "O que é recall branco?", answer: "É um recalkl voluntário"},
    {question: "Recall veícular pode ser feito onde quizer?", answer: "Sim, mas o custo é pago pelo proprietário"},
    {question: "Recall veícular gera custo para o proprietário?", answer: "Não"},
    {question: "Recall veícular tem prazo de validade?", answer: "Não"},
    {question: "Existe site para verificação de recall por veículo?", answer: "Sim, o site da montadora ou Denatran"},
    {question: "Quando começou a prática de recall veícular?", answer: "Na década de 60 nos EUA"},
    {question: "O que fazer caso a oficnica especializada demore para substituir a peça com defeito?", answer:"Acionar o Procon"}
  ];

  return (
      <>
        {!openDeck ? (
          <StartScreen fncOpenDeck={activateOpenDeck} zapGoal={zapGoal} getZapGoal={getZapGoal} getDeck={getDeck} deck={deck} />
        ) : (
          <QuestionsScreen deck={deck} setOpenDeck={setOpenDeck} zapGoal={zapGoal} setZapGoal={setZapGoal} setDeck={setDeck} />
        )}
      </>
  );
}

ReactDom.render(<App />, document.querySelector(".root"));