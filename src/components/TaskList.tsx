import React, { useEffect, useRef } from "react";
import {TaskProps } from "../utils/typescript";
import DoneCard from "./task-cards/DoneCard";
import TodoCard from "./task-cards/TodoCard";
import InProgCard from "./task-cards/InProgCard";


function TaskList({title, assignments, status}: TaskProps) { 
    // Add each element in object to an array
    const taskArr:Object[] = [];
    for (const key in assignments)
        taskArr.push(assignments[key]);

    return ( 
        <>
            <h1>{title}</h1>
            {/* Create task card for each task in taskArr,
                Checks task status and displays card in correct task list  */}
            {taskArr.map((task: any) => {
                if (status == "todo" && task.status == "todo")
                    return <TodoCard key={task.taskId} task={task}/>
                else if (status == "inProgress" && task.status == "inProgress")
                    return <InProgCard key={task.taskId} task={task}/>
                else if (status == "done" && task.status == "done")
                    return <DoneCard key={task.taskId} task={task}/>
            })}
        </>
    );
}

export default TaskList;