export default function Nome({ nome, setNome, novoNome }){
    return (<div>
        <h2>Bem vindo: { nome }</h2>
        <button onClick={e=>setNome(novoNome)}> Trocar nome </button>
    </div>)
}