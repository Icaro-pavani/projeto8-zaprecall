import ReactDom from 'react-dom';
import React from 'react';

import TelaInicio from './components/TelaInicio';
import TelaPerguntas from './components/TelaPerguntas';


function App() {
  const [abrirDeck, setAbrirDeck] = React.useState(true);

  function acionaAbrirDeck() {
    setAbrirDeck(true);
  }

  return (
      <>
        {!abrirDeck ? <TelaInicio fncAbrirDeck={acionaAbrirDeck}/> : <TelaPerguntas />}
      </>
  )
}

ReactDom.render(<App />, document.querySelector(".root"));