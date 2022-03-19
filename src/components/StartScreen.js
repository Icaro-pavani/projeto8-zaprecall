import logo from "./../assets/logo.svg";

export default function StartScreen(props) {
    return (
        <div className="start-screen">
            <img className="start-logo" src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={props.fncOpenDeck}>Iniciar Recall!</button>
        </div>
    )
}