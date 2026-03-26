import {TaskType} from "./types/types.ts";

export const Task = ({title, isDone, priority, description}: TaskType) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <span> (<i>{priority}</i>) </span>
            <button>x</button>
            <p>{description}</p>
        </li>
    );
};

