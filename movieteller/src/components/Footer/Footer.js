import { Link } from 'react-router-dom';

import "./Footer.css";

function Footer() {
    return(
    <footer className={"footer footer__sect"}>
        <Link to={"/"}>
            <h3 className={"footer__title"}>
                Movieteller
            </h3>
        </Link>
        <section className={"copyright__sect"}>
            <p>Site desenvolvido por Michael Kevin.</p>
            <p>Link API do OpenMovieDatabase</p>
        </section>
        <section className={"ref__sect"}>
            <p>Desenvolvimento educativo. Links:</p>
            <section className={"ref-links__sect"}>
                <a target={"_blank"} rel="noreferrer"
                    href="https://www.udemy.com/course/curso-reactjs/"
                >
                    Página do curso
                </a>
                <a target={"_blank"} rel="noreferrer"
                    href="https://sujeito-curso.netlify.app/"
                >
                    Build final do curso
                </a>
            </section>
        </section>
        
    </footer>);
}

export default Footer;