import React, {useState} from "react";
import "./style.css";

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
    <article className="to-do-list__artc">
        <h2 className={"tasks__title"} >{title}</h2>
        <input className={"new-task__inp"}
            type="text" placeholder="Digite aqui sua nova tarefa"
            value={input} onChange={e => setInput(e.target.value)}
        />
        <button className={"new-task__btn"} onClick={addTask}>{addTaskText}</button>
        <ul className={"tasks__ul"}>
            {tasks.map( (task, index) => {
                return(<section className={"task__sect"}>
                    <li className={"task__li"} >{task}</li>
                    <button className={"task-del__btn"} onClick={()=>{deleteTask(index)}}>X</button>
                </section>);
            }
        )}
        </ul>
    </article>
    );
}

export default ToDoList;