import React from "react";
import logo from "./../assets/logo.svg";

export default function StartScreen(props) {
    const {fncOpenDeck, zapGoal, getZapGoal} = props

    return (
        <div className="start-screen">
            <img className="start-logo" src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <input type="number" className="zap-goal" placeholder="Digite sua meta de zaps..." onChange={getZapGoal} />
            {zapGoal >= 1 ? <button className="active" onClick={fncOpenDeck}>Iniciar Recall!</button> : <button className="blocked">Iniciar Recall!</button>}
        </div>
    )
}