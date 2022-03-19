export default function shuffle(deck){
    deck.sort(mix);
}

function mix() {
    return Math.random() - 0.5;
}