import { Link } from "react-router-dom";
import "./Error404.css";

import Home from "../Home/Home";

export default function Error404() {
    
    return(<main className={'main__sect main'}>
        <article className={"error__artc"}>
            <section className={"error-pic__sect"}>
                <p className={"e404__pic"}></p>
            </section>
            <section className={"error-txt__sect"}>
                <h2 className={"error__title"}>Error404</h2>
                <p className={"error__txt"}>Desculpe, mas não entendi onde você queria chegar.</p>
                <p className={"not-found__txt"}>
                    <strong>Página não encontrada</strong>
                    <Link to="/" element={ <Home />}>Voltar para a página inicial</Link>
                </p>
            </section>
        </article>
    </main>);
}