import React, { useEffect, useRef, useState } from "react";
import TaskList from "./TaskList";
import { assignmentsRef } from "../utils/firebaseConfig.ts";
import { onValue } from "firebase/database";


function TaskContainer() {
    
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        // onValue updates site in realtime
        onValue(assignmentsRef, (snapshot) => {
            const tasksData = snapshot.val();
            // Add taskId as a key to object
            for (const key in tasksData) {
                tasksData[key].taskId = key
            }
            setTasks(tasksData);
        })
    }, [])
    
    return ( 
        <>
            <TaskList title="To Do" assignments={tasks} status="todo"/>
            <TaskList title="In Progress" assignments={tasks} status="inProgress"/>
            <TaskList title="Done" assignments={tasks} status="done"/>
        </>
     );
}

export default TaskContainer;