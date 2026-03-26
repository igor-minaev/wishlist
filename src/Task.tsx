import {TaskType} from "./types/types.ts";

type TaskPropsType = TaskType & {
    removeTask: (taskId: string) => void
}

export const Task = ({id, title, isDone, priority, removeTask}: TaskPropsType) => {
    const removeTaskHandler = () => removeTask(id)

    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <span> (<i>{priority}</i>) </span>
            <button onClick={removeTaskHandler}>x</button>
        </li>
    );
};

