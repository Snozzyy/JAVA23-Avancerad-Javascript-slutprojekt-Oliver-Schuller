export interface TaskProps {
    title: string;
    status?:string;
    
    // Orkar inte med errors atm, byt ut any mot korrekt typ
    assignments: any;
}

