import React, {useState} from "react";

function ToDoList() {
    const title = 'Tarefas';
    const [input, setInput] = useState('');
    const addTaskText = 'Adicionar Tarefa';
    const [tasks, setTasks] = useState([
        'Pagar a conta de luz',
        'Estudar React Hooks'
    ]);

    function addTask(e) {
    e.preventDefault();
    if(input === '') return;
    setTasks([...tasks, input]);
    setInput('');
    }

    function deleteTask(index) {
        setTasks(tasks.filter( (task, taskIndex) => index !== taskIndex));
    }

    return (
    <div className="App">
        <h2>{title}</h2>
        <input className={"newTask__inp"} type="text" placeholder="Adicione aqui sua tarefa" value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={addTask}>{addTaskText}</button>
        <ul className={"tasks__ul"}>
            {tasks.map( (task, index) => {
                return(<>
                    <li className={"task__li"} >{task}</li>
                    <button className={"task-del__btn"} onClick={()=>{deleteTask(index)}}>X</button>
                </>);
            }
        )}
        </ul>
    </div>
    );
}

export default ToDoList;