export type PriorityType = 'Low' | 'Medium' | 'High' | 'All'
export type FilterType = 'All' | 'Active' | 'Completed'

export type TaskType = {
    id: string
    title: string
    description: string
    isDone: boolean
    priority: PriorityType
}