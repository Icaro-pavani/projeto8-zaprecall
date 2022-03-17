import ReactDom from 'react-dom';

import TelaInicio from './components/TelaInicio.js';

function App() {
    return (
        <TelaInicio />
    )
}

ReactDom.render(<App />, document.querySelector(".root"));