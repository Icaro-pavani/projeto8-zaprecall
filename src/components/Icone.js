export default function Icone(props) {
    const {acuracia} = props;

    if (acuracia === "erro"){
        return (<ion-icon className={acuracia} name="close-circle"></ion-icon>);
    } else if (acuracia === "proximo"){
        return (<ion-icon className={acuracia} name="help-circle"></ion-icon>);
    } else if (acuracia === "acerto"){
        return (<ion-icon className="acerto" name="checkmark-circle"></ion-icon>)
    }
    return (<ion-icon name="play-outline"></ion-icon>)
}