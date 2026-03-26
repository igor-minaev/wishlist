import {FilterType, PriorityType, TaskType} from "./types/types.ts";
import {Task} from "./Task.tsx";
import {ChangeEvent, useState} from "react";
import {Button} from "./components/Button.tsx";

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterType) => void
    changePriority: (priority: PriorityType) => void
    addTask: (title: string) => void
}
export const Todolist = ({title, tasks, removeTask, changeFilter, changePriority, addTask}: TodolistPropsType) => {

    const [newTitle, setNewTitle] = useState('')

    const mappedTasks = tasks.length
        ? <ul>
            {tasks.map(t => (
                <Task {...t} key={t.id} removeTask={removeTask}/>
            ))}
        </ul>
        : <p>Your todolist is empty!</p>

    const changePriorityHandler = (e: ChangeEvent<HTMLSelectElement>) => changePriority(e.currentTarget.value as PriorityType)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)
    const addTaskHandler = () => {
        addTask(newTitle)
        setNewTitle('')
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTitle} onChange={onChangeHandler}/>
                <Button onClick={addTaskHandler} name='+'/>
            </div>
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
            <div>
                <Button onClick={() => changeFilter('All')} name='All'/>
                <Button onClick={() => changeFilter('Active')} name='Active'/>
                <Button onClick={() => changeFilter('Completed')} name='Completed'/>
            </div>
        </div>
    );
};

