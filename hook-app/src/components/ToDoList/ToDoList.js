import React, {useCallback, useEffect, useMemo, useState} from "react";
import "./style.css";

function ToDoList() {
    const title = 'Tarefas';
    const [input, setInput] = useState('');
    const addTaskText = 'Adicionar Tarefa';
    const [tasks, setTasks] = useState(()=>
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    const tasksLength = useMemo(() => tasks.length, [tasks]);

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = useCallback(() => {
        if(input === '') return;
        setTasks([...tasks, input]);
        setInput('');
    }, [input, tasks]);

    const deleteTask = useCallback((index) => {
        setTasks(tasks.filter( (task, taskIndex) => index !== taskIndex));
    }, [tasks]);

    return (
    <article className="to-do-list__artc">
        <h2 className={"tasks__title"} >{title}</h2>
        <input className={"new-task__inp"}
            type="text" placeholder="Digite aqui sua nova tarefa"
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => {if(e.key === 'Enter') addTask()}}
        />
        <button className={"new-task__btn"} onClick={addTask}>{addTaskText}</button>
        <p className={"tasks-total__p"}>Total de tarefas: {tasksLength}</p>
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