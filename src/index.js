import ReactDom from 'react-dom';

import TelaInicio from './components/TelaInicio';
import TelaPerguntas from './components/TelaPerguntas';

function App() {
    return (
        <>
          <TelaInicio />
          <TelaPerguntas />
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));