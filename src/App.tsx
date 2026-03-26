import './App.css'
import {useState} from "react";
import {Todolist} from "./Todolist.tsx";

export type PriorityType = 'Low' | 'Medium' | 'High' | 'All'
export type FilterType = 'All' | 'Active' | 'Completed'

export type TaskType = {
    id: string
    title: string
    description: string
    isDone: boolean
    priority: PriorityType
}

const defaultTasks: TaskType[] = [
    {id: crypto.randomUUID(), title: 'HTML', description: "some text", isDone: true, priority: 'Low'},
    {id: crypto.randomUUID(), title: 'CSS', description: "some text", isDone: false, priority: 'Low'},
    {id: crypto.randomUUID(), title: 'JS', description: "some text", isDone: true, priority: 'Medium'},
    {id: crypto.randomUUID(), title: 'REACT', description: "some text", isDone: true, priority: 'High'},
    {id: crypto.randomUUID(), title: 'REDUX', description: "some text", isDone: false, priority: 'High'},
    {id: crypto.randomUUID(), title: 'RTK', description: "some text", isDone: false, priority: 'High'},
    {id: crypto.randomUUID(), title: 'Vite', description: "some text", isDone: true, priority: 'Medium'}
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
    return (
        <div className="app">
            <Todolist title='What to learn' tasks={filteredTasks}/>
        </div>
    )
}

export default App
