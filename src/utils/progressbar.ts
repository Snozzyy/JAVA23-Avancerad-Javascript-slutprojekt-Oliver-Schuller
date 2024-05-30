export function calculateProgress(taskArr){
    const amountOfTasks = taskArr.length;
    let amountDone:number = 0;

    for (const key in taskArr) 
        if (taskArr[key].isDone)
            amountDone++;
    
    const progress = Math.round((amountDone / amountOfTasks) * 100);
    return progress;
}