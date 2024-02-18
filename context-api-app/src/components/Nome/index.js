import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export default function Nome(){
    const { nomeAluno, setNomeAluno, inputName } = useContext(UserContext);
    return (
    <div>
        <h2>Bem vindo: {nomeAluno}</h2>
        <button onClick={e=>setNomeAluno(inputName)}> Trocar nome </button>
    </div>
    )
}