import {TaskType} from "./types/types.ts";
import {Task} from "./Task.tsx";

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
}
export const Todolist = ({title, tasks, removeTask}: TodolistPropsType) => {

    const mappedTasks = tasks.length
        ? <ul>
            {tasks.map(t => (
                <Task {...t} key={t.id} removeTask={removeTask}/>
            ))}
        </ul>
        : <p>Your todolist is empty!</p>

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div>
                <label htmlFor="priority">Task's priority</label>
                <select id='priority'>
                    <option value="All">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            {mappedTasks}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

