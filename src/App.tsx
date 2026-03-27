import './App.css'
import {useState} from "react";
import {Todolist} from "./Todolist.tsx";
import {FilterType, PriorityType, TaskType} from "./types/types.ts";


const defaultTasks: TaskType[] = [
    {id: crypto.randomUUID(), title: 'HTML', isDone: true, priority: 'Low'},
    {id: crypto.randomUUID(), title: 'CSS', isDone: false, priority: 'Low'},
    {id: crypto.randomUUID(), title: 'JS', isDone: true, priority: 'Medium'},
    {id: crypto.randomUUID(), title: 'REACT', isDone: true, priority: 'High'},
    {id: crypto.randomUUID(), title: 'REDUX', isDone: false, priority: 'High'},
    {id: crypto.randomUUID(), title: 'RTK', isDone: false, priority: 'High'},
    {id: crypto.randomUUID(), title: 'Vite', isDone: true, priority: 'Medium'}
]

const filterTasks = (tasks: TaskType[], filter: FilterType, priority: PriorityType): TaskType[] => {
    let filteredTasks = tasks
    if (filter === 'Active') {
        filteredTasks = filteredTasks.filter(t => !t.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks = filteredTasks.filter(t => t.isDone)
    }
    if (priority !== 'All') {
        filteredTasks = filteredTasks.filter(t => t.priority === priority)
    }
    return filteredTasks
}


function App() {
    const [tasks, setTasks] = useState<TaskType[]>(defaultTasks)
    const [filter, setFilter] = useState<FilterType>('All')
    const [priority, setPriority] = useState<PriorityType>('All')

    const filteredTasks = filterTasks(tasks, filter, priority)

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const changeFilter = (filter: FilterType) => setFilter(filter)

    const changePriority = (priority: PriorityType) => setPriority(priority)

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: crypto.randomUUID(),
            title,
            isDone: false,
            priority: 'Low'
        }
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskId: string, status: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: status} : t))
    }

    return (
        <div className="app">
            <Todolist
                title='What to learn'
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changePriority={changePriority}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    )
}

export default App
