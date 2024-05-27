import React, { useEffect, useRef } from "react";
import {TaskProps } from "../utils/typescript";
import DoneCard from "./DoneCard";
import TodoCard from "./TodoCard";
import InProgCard from "./InProgCard";


function TaskList({title, assignments, status}: TaskProps) { 
    const taskArr:Object[] = [];
    for (const key in assignments)
        taskArr.push(assignments[key])
    
    return ( 
        <>
            <h1>{title}</h1>
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