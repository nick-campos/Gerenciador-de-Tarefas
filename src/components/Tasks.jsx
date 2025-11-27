import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks(props) {
    
    return ( 
    
    <ul className="space-y-3  p-6 bg-slate-300 rounded-md shadow">
        {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-1">
                <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-500 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                    {task.title} - {task.description}
                </button>
                <button className="bg-slate-500 p-1 rounded-md text-white">
                    <ChevronRightIcon />
                </button>
                <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-500 p-1 rounded-md text-white">
                    <Trash2 />
                </button>
            </li>
        ))}
    </ul>
    );
}

export default Tasks;