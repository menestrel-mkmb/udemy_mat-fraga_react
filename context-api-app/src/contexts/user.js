import { useState, createContext } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }){
    const [nomeAluno, setNomeAluno] = useState('Desconhecido');
    const [inputName, setInputName] = useState('');

    return(
        <UserContext.Provider value={{ nomeAluno, setNomeAluno, inputName }}>
            { children }
            <input
                type='text' value={inputName}
                onChange={e=>setInputName(e.target.value)}
                placeholder='Digite o nome que aparecerá aqui'
            />
        </UserContext.Provider>
    )
}