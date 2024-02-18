export default function Nome({ nome, setNome }){
    return (<div>
        <h2>Bem vindo: { nome }</h2>
        <button onClick={e=>setNome('João')}> Trocar nome </button>
    </div>)
}