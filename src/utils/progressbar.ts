import { ChecklistObject } from "./typescript";

export function calculateProgress(taskArr:ChecklistObject[]){
    const amountOfTasks:number = taskArr.length;
    let amountDone:number = 0;

    for (const key in taskArr) 
        if (taskArr[key].isDone)
            amountDone++;
    
    // Calculate percentage of tasks done, round
    const progress = Math.round((amountDone / amountOfTasks) * 100);
    return progress;
}