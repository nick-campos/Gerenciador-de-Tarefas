import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Estudar react",
    description: "Retomar video aula",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Estudar JS",
    description: "Ver video aula",
    isCompleted: false,
  },
]);

function onTaskClick(taskId) {
  const newTasks = tasks.map(task =>{
    //PRECISO ATUALIZAR ESSA TAREFA
    if (task.id == taskId) {
      return {...task, isCompleted: !task.isCompleted}
    } else {
      return task
    }
  });
  setTasks(newTasks);
}

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([ ...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-[500px] space-y-3">
        <h1 className="text-3xl text-neutral-50 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App