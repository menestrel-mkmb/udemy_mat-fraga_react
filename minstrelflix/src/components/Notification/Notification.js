import { useEffect, useState } from "react";

import "./Notification.css";

export default function Notification(props) {
    const [ visibility, setVisibility ] = useState(true);
    const [ timer, setTimer ] = useState(null);
    const notificationTime = 3000;

    useEffect(() => {
        setVisibility(true);
        setTimer(setInterval(closeNotification, notificationTime));
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
        <progress className={"timer__pbar"} value={notificationTime-timer} max={notificationTime} />
        <h3 className={"notf__title"}>{ props.type === "error" ? "Erro" :
                "Sucesso" }</h3>
        <p className={"notf__desc"}>{ props.type === "error" ? "O filme já existe na lista" :
                "O filme foi adicionado a lista." }</p>
    </article>);
}