import {FilterType, PriorityType, TaskType} from "../../types/types.ts";
import {Task} from "../Task/Task.tsx";
import {ChangeEvent, useState} from "react";
import {Button} from "../Button/Button.tsx";
import {Input} from "../Input/Input.tsx";
import s from './Todolist.module.css'

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterType) => void
    changePriority: (priority: PriorityType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, status: boolean) => void
}
export const Todolist = ({
                             title,
                             tasks,
                             removeTask,
                             changeFilter,
                             changePriority,
                             addTask,
                             changeTaskStatus
                         }: TodolistPropsType) => {

    const [newTitle, setNewTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const mappedTasks = tasks.length
        ? <ul>
            {tasks.map(t => (
                <Task {...t} key={t.id} removeTask={removeTask} changeTaskStatus={changeTaskStatus}/>
            ))}
        </ul>
        : <p>Your todolist is empty!</p>

    const changePriorityHandler = (e: ChangeEvent<HTMLSelectElement>) => changePriority(e.currentTarget.value as PriorityType)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTitle(e.currentTarget.value)
    }
    const addTaskHandler = () => {
        const trimmedTitle = newTitle.trim()
        if (trimmedTitle !== '') {
            addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setNewTitle('')
    }

    const disableBtn = newTitle.length < 3

    return (
        <div className={s.todolist}>
            <h3>{title}</h3>
            <div>
                <Input className={error ? s.error : ''} value={newTitle} onChange={onChangeHandler}/>
                <Button disabled={disableBtn} onClick={addTaskHandler} name='+'/>
            </div>
            {error && <p style={{color: "red"}}>Title is required!</p>}
            <div>
                <label htmlFor="priority">Task's priority</label>
                <select id='priority' onChange={changePriorityHandler}>
                    <option value="All">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            {mappedTasks}
            <div className={s.wrapperBtn}>
                <Button onClick={() => changeFilter('All')} name='All'/>
                <Button onClick={() => changeFilter('Active')} name='Active'/>
                <Button onClick={() => changeFilter('Completed')} name='Completed'/>
            </div>
        </div>
    );
};

