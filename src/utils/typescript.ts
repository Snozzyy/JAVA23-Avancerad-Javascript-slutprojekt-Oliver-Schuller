export interface TaskProps {
    title: string;
    status?:string;
    assignments: Object;
}

export interface TaskObject {
    assigned: string,
    assignment: string,
    category: string,
    status: string,
    taskId: string
}