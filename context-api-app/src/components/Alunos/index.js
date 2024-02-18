import Nome from "../Nome";

export default function Alunos({ nome, setNome }){
    return(<div>
        <Nome nome={ nome } setNome={setNome}/>
    </div>)
}