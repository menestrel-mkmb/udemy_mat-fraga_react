import Nome from "../Nome";

export default function Alunos({ nome, setNome, novoNome }){
    return(<div>
        <Nome nome={ nome } setNome={setNome} novoNome={novoNome} />
    </div>)
}