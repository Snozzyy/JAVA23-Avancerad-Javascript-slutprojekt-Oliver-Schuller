export interface TaskProps {
    title: string;
    
    // Orkar inte med errors atm, byt ut any mot korrekt typ
    assignments: any;
}

export interface TaskObject {
    taskId: string;
}