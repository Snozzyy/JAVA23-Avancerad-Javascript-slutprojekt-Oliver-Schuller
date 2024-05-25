import React, { useEffect, useRef } from "react";
import TaskCard from "./TaskCard";
import { onValue } from "firebase/database";
import { assignmentsRef } from "../utils/firebase";
import { TaskObject, TaskProps } from "../utils/typescript";
import { getTasks } from "../utils/assignments";



function TaskList({title, assignments}: TaskProps) { 

    return ( 
        <>
            <h1>{title}</h1>
            {assignments.map((task: TaskObject) => {   
                return <TaskCard key={task.taskId} title={title} assignments={task}/>
            })}

        </>
     );
}

export default TaskList;