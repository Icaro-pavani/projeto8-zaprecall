export default function embaralhar(deck){
    deck.sort(misturar);
}

function misturar() {
    return Math.random() - 0.5;
}