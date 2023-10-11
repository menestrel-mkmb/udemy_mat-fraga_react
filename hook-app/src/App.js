import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState('Tarefas');
  const [input, setInput] = useState('Adicione aqui sua tarefa');
  const [addTaskText, setAddTaskText] = useState('Adicionar Tarefa');
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
    setTasks( 
      tasks.filter( (task, taskIndex) => taskIndex !== index)
    );
  }

  return (
    <div className="App">
      <h2>{title}</h2>
      <input className={"newTask__inp"} type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={addTask}>{addTaskText}</button>
      <ul>
        {tasks.map( (task, index) => {
          return (
          <section>
            <li>{task}</li><button onClick={()=>{deleteTask(index)}}>X</button>
          </section>);
        }
        )}
      </ul>
    </div>
  );
}

export default App;
