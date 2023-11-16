import { useEffect, useState } from "react";

import "./Notification.css";

export default function Notification(props) {
    const [ visibility, setVisibility ] = useState(true);
    const [ timer, setTimer ] = useState(null);

    useEffect(() => {
        setTimer(setInterval(closeNotification, 3000));
    }, []);

    const closeNotification = () => {
        setVisibility(false);
        setTimer(null);
    }

    return(
    <article
        onClick={closeNotification}
        className={`notification__artc ${ props.type }
                ${ visibility ? "" : "hidden"}`}
    >
        <h3>{ props.type === "error" ? "Erro!" :
                "Sucesso!" }</h3>
        <p>{ props.type === "error" ? "O filme já existe na lista" :
                "O filme foi adicionado a lista." }</p>
    </article>);
}