import React, { useEffect } from "react";
import TaskList from "./TaskList";
import { onValue } from "firebase/database";
import { assignmentsRef } from "../utils/firebase";
import { getTasks } from "../utils/assignments";


function TaskContainer() {

    const assignments:Object = {
        task1: {
            "assigned": "enya",
            "assignment": "snygga till sida",
            "category": "ux",
            "status": "todo"
        },

        task2: {
            "assigned": "oliver",
            "assignment": "göra slutprojekt",
            "category": "frontend",
            "status": "todo"
        }
    };

    let todoArr:Object[] = [];
    let inProgressArr:Object[] = [];
    let doneArr:Object[] = [];

    for (const key in assignments) {
        const taskStatus:string = assignments[key].status;
        
        if (taskStatus == "todo") 
            todoArr.push(assignments[key]);
        
        else if (taskStatus == "inProgress")
            inProgressArr.push(assignments[key]);
        else if (taskStatus == "done")
            doneArr.push(assignments[key]);
    }
 
    return ( 
        <>
            <TaskList title="To Do" assignments={todoArr}/>
            <TaskList title="In Progress" assignments={inProgressArr}/>
            <TaskList title="Done" assignments={doneArr}/>
        </>
     );
}

export default TaskContainer;