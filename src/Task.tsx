import {TaskType} from "./types/types.ts";
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {ChangeEvent} from "react";

type TaskPropsType = TaskType & {
    removeTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, status: boolean) => void
}

export const Task = ({id, title, isDone, priority, removeTask, changeTaskStatus}: TaskPropsType) => {
    const removeTaskHandler = () => removeTask(id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(id, e.currentTarget.checked)
    }

    return (
        <li>
            <Input type="checkbox" checked={isDone} onChange={onChangeHandler}/>
            <span>{title}</span>
            <span> (<i>{priority}</i>) </span>
            <Button onClick={removeTaskHandler} name='x'/>
        </li>
    );
};

