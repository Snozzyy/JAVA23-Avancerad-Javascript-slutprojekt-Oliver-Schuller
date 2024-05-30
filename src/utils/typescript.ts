export interface TaskProps {
    title: string
    status?:string
    assignments: Object
}

export interface TaskObject {
    assigned: string
    assignment: string
    category: string
    status: string
    taskId?: string
    checklist?: Object
}

export interface ChecklistObject {
    task: string
    isDone: boolean 
}

export interface ChecklistProps {
    taskId: string
    taskIndex: number
    task: ChecklistObject
}