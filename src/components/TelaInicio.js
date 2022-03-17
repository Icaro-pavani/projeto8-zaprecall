export default function TelaInicio(props) {
    return (
        <div className="tela-inicio">
            <img className="logo-inicio" src="imagens/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={props.fncAbrirDeck}>Iniciar Recall!</button>
        </div>
    )
}