import {TaskType} from "../../types/types.ts";
import {Button} from "../Button/Button.tsx";
import {Input} from "../Input/Input.tsx";
import {ChangeEvent} from "react";
import s from './Task.module.css'

type TaskPropsType = TaskType & {
    removeTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, status: boolean) => void
}

export const Task = ({id, title, isDone, priority, removeTask, changeTaskStatus}: TaskPropsType) => {
    const removeTaskHandler = () => removeTask(id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(id, e.currentTarget.checked)
    }

    const completedTask = isDone ? s.isDone : ''

    return (
        <li>
            <Input type="checkbox" checked={isDone} onChange={onChangeHandler}/>
            <span className={completedTask}>{title}</span>
            <span> (<i>{priority}</i>) </span>
            <Button onClick={removeTaskHandler} name='x'/>
        </li>
    );
};

