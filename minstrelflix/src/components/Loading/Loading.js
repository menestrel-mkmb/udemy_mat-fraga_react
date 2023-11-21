import "./Loading.css";

function Loading() {
    return(
    <main className={"loading__sect main__sect main"}>
        <h2 className={"loading__title"}>Carregando, por favor aguarde</h2>
        <section className={"dots__sect"}>
            <span className={"dot dot-1"}></span>
            <span className={"dot dot-2"}></span>
            <span className={"dot dot-3"}></span>
        </section>
    </main>);
}

export default Loading;