export default function Card(props) {
    const {pergunta} = props;

    return (
        <div className="pergunta-card">
            <p>{pergunta}</p>
            <img src="imagens/setinha.png" alt="seta"/>
        </div>
    )
}