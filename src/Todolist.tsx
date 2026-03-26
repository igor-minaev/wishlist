import {TaskType} from "./types/types.ts";

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
}
export const Todolist = ({title, tasks}: TodolistPropsType) => {

    const mappedTasks = tasks.length
        ? <ul>
            {tasks.map(t => (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <span> (<i>{t.priority}</i>) </span>
                    <button>x</button>
                </li>
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

